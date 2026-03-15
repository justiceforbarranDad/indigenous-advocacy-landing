import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification functions
vi.mock("./db", () => ({
  createSurvivorStory: vi.fn().mockResolvedValue({ id: 1 }),
  getPublicSurvivorStories: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      story: "This is a test story",
      category: "child_victim",
      isPublic: "yes",
      status: "approved",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  createDonation: vi.fn().mockResolvedValue({ id: 1 }),
  getTotalDonations: vi.fn().mockResolvedValue(50000), // $500.00
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./_core/emailService", () => ({
  sendEmail: vi.fn().mockResolvedValue(true),
  generateStoryConfirmationEmail: vi.fn().mockReturnValue("<html>Story Confirmation</html>"),
  generateStoryConfirmationText: vi.fn().mockReturnValue("Story Confirmation Text"),
  generateDonationConfirmationEmail: vi.fn().mockReturnValue("<html>Donation Confirmation</html>"),
  generateDonationConfirmationText: vi.fn().mockReturnValue("Donation Confirmation Text"),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("stories.submit with email", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("submits a survivor story and sends confirmation email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const { sendEmail } = await import("./_core/emailService");

    const result = await caller.stories.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      story: "This is my story of systemic failure",
      category: "child_victim",
      isPublic: "yes",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("confirmation email");
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "john@example.com",
        subject: expect.stringContaining("Story Submission Confirmed"),
      })
    );
  });

  it("rejects stories with missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.stories.submit({
        name: "",
        email: "john@example.com",
        story: "This is my story",
        category: "child_victim",
        isPublic: "yes",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Name is required");
    }
  });

  it("rejects stories with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.stories.submit({
        name: "John Doe",
        email: "invalid-email",
        story: "This is my story",
        category: "child_victim",
        isPublic: "yes",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email required");
    }
  });

  it("rejects stories with insufficient content", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.stories.submit({
        name: "John Doe",
        email: "john@example.com",
        story: "Too short",
        category: "child_victim",
        isPublic: "yes",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("at least 10 characters");
    }
  });
});

describe("stories.getPublic", () => {
  it("retrieves public stories", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.stories.getPublic({
      limit: 10,
      offset: 0,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]?.isPublic).toBe("yes");
  });
});

describe("donations.submit with email", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("submits a donation and sends confirmation email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const { sendEmail } = await import("./_core/emailService");

    const result = await caller.donations.submit({
      donorName: "Jane Doe",
      donorEmail: "jane@example.com",
      amount: 50,
      method: "etransfer",
      isAnonymous: "no",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("confirmation email");
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "jane@example.com",
        subject: expect.stringContaining("Donation Confirmation"),
      })
    );
  });

  it("sends anonymous donation confirmation without donor name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const { sendEmail } = await import("./_core/emailService");

    const result = await caller.donations.submit({
      donorName: "Jane Doe",
      donorEmail: "jane@example.com",
      amount: 100,
      method: "etransfer",
      isAnonymous: "yes",
    });

    expect(result.success).toBe(true);
    expect(sendEmail).toHaveBeenCalled();
  });

  it("rejects donations with invalid amount", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.donations.submit({
        donorName: "Jane Doe",
        donorEmail: "jane@example.com",
        amount: 0,
        method: "etransfer",
        isAnonymous: "no",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("at least");
    }
  });

  it("rejects donations with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.donations.submit({
        donorName: "Jane Doe",
        donorEmail: "invalid-email",
        amount: 50,
        method: "etransfer",
        isAnonymous: "no",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email required");
    }
  });
});

describe("donations.getTotal", () => {
  it("retrieves total donations", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.donations.getTotal();

    expect(result.totalCAD).toBe("500.00");
  });
});

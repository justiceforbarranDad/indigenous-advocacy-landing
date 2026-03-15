import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("legal.submitLawyerProfile", () => {
  it("accepts valid lawyer profile submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.legal.submitLawyerProfile({
      lawyerName: "Jane Smith",
      email: "jane@example.com",
      jurisdiction: "International Court of Justice",
      specialization: "International Human Rights Law",
      experience: "20 years in international law",
      message: "Interested in this case",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("legal profile has been received");
  });

  it("rejects submission without required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.legal.submitLawyerProfile({
        lawyerName: "",
        email: "jane@example.com",
        jurisdiction: "International Court of Justice",
        specialization: "International Human Rights Law",
        experience: "20 years",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Name is required");
    }
  });

  it("rejects invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.legal.submitLawyerProfile({
        lawyerName: "Jane Smith",
        email: "not-an-email",
        jurisdiction: "International Court of Justice",
        specialization: "International Human Rights Law",
        experience: "20 years",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email required");
    }
  });
});

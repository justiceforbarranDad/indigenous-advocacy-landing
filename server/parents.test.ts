import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("parents.submitParentProfile", () => {
  it("accepts valid parent profile submission", async () => {
    const caller = appRouter.createCaller({} as any);
    
    const result = await caller.parents.submitParentProfile({
      parentName: "Jane Doe",
      email: "jane@example.com",
      phone: "555-1234",
      childSituation: "My child was failed by DPJ after serious trauma. We need accountability.",
      involvement: "I want to help organize community meetings and document systemic failures.",
      message: "Let's unite families for justice",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("received");
  });

  it("rejects submission without required fields", async () => {
    const caller = appRouter.createCaller({} as any);
    
    try {
      await caller.parents.submitParentProfile({
        parentName: "",
        email: "jane@example.com",
        childSituation: "My child was failed",
        involvement: "I want to help",
      } as any);
      expect.fail("Should have thrown error");
    } catch (error: any) {
      expect(error.message).toContain("required");
    }
  });

  it("rejects invalid email format", async () => {
    const caller = appRouter.createCaller({} as any);
    
    try {
      await caller.parents.submitParentProfile({
        parentName: "Jane Doe",
        email: "invalid-email",
        childSituation: "My child was failed by DPJ after serious trauma",
        involvement: "I want to help organize community meetings",
      } as any);
      expect.fail("Should have thrown error");
    } catch (error: any) {
      expect(error.message).toContain("email");
    }
  });
});

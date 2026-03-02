import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    const headers = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("returns null when authorization format is wrong", () => {
    const headers = {
      authorization: "Bearer 123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("returns null when ApiKey has no value", () => {
    const headers = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("returns the api key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("my-secret-key");
  });
});

import { describe, expect, it } from "vitest";
import { getLocaleFromLcid } from "./locale";

describe("getLocaleFromLcid test", () => {
  it("lcid is 1030, returns da-DK", () => {
    expect(getLocaleFromLcid(1030)).toEqual("da-DK");
  });

  it("lcid is undefined, returns undefined", () => {
    expect(getLocaleFromLcid(undefined)).toEqual(undefined);
  });
});

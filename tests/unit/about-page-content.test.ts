import React from "react";
import AboutPage from "@/app/about/page";

globalThis.React = React;

describe("About page reference structure", () => {
  test("redirects to / during pre-launch phase", () => {
    try {
      AboutPage();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toContain("NEXT_REDIRECT");
      expect(String((error as Error & { digest?: string }).digest)).toContain("/");
      return;
    }

    throw new Error("Expected about page to redirect");
  });
});

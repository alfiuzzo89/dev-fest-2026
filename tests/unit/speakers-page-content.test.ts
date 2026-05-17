import React from "react";
import SpeakersPage from "@/app/speakers/page";

globalThis.React = React;

describe("Speakers page reference structure", () => {
  test("redirects to / during pre-launch phase", () => {
    try {
      SpeakersPage();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toContain("NEXT_REDIRECT");
      expect(String((error as Error & { digest?: string }).digest)).toContain("/");
      return;
    }

    throw new Error("Expected speakers page to redirect");
  });
});

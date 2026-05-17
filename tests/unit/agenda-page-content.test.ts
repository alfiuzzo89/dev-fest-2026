import React from "react";
import AgendaPage from "@/app/agenda/page";

globalThis.React = React;

describe("Agenda page reference structure", () => {
  test("redirects to / during pre-launch phase", () => {
    try {
      AgendaPage();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toContain("NEXT_REDIRECT");
      expect(String((error as Error & { digest?: string }).digest)).toContain("/");
      return;
    }

    throw new Error("Expected agenda page to redirect");
  });
});

import { navLinks } from "@/src/content/nav-links";

describe("navLinks", () => {
  test("contains exactly 2 entries", () => {
    expect(navLinks).toHaveLength(2);
  });

  test("hrefs are exactly '/' and '/venue'", () => {
    const hrefs = navLinks.map((link) => link.href);

    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/venue");
  });
});

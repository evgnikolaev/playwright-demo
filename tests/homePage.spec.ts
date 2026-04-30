import { test, expect } from "@playwright/test";

test("check header", async ({ page }) => {
  await page.goto("");
  const header = page.getByTestId("homePageHeader");
  await expect(header).toBeVisible();
});

test("check cardlist items", async ({ page }) => {
  await page.goto("");
  const firstCard = page.getByTestId("catCard_0");
  const cardLIstItems = page.getByTestId(/catCard/);

  await expect(firstCard).toBeVisible();
  expect(await cardLIstItems.count()).toBeGreaterThan(0);
});

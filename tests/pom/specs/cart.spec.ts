import { questTest as test } from "../../fixtures/app.fixture";

test("Shows emptycart state", async ({ cartPage }) => {
  await cartPage.open();
  await cartPage.assertEmpty();
});

test("Removing last item makes cart empty", async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.removeFirstItem();
  await cartPage.assertEmpty();
});

test("Clear cart removes all items", async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.clear();
  await cartPage.assertEmpty();
});

test("Changing quantity updates cart bage and input value", async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.addOneMoreSameCart();
  await homePage.assertCartBadgeCount(2);
  await cartPage.assertCatCounter("2");
});

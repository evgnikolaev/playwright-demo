import { questTest as test } from "../../fixtures/app.fixture";

test("Shows emptycart state", async ({ сartPage }) => {
  await сartPage.open();
  await сartPage.assertEmpty();
});

test("Removing last item makes cart empty", async ({ сartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await сartPage.open();
  await сartPage.removeFirstItem();
  await сartPage.assertEmpty();
});

test("Clear cart removes all items", async ({ сartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await сartPage.open();
  await сartPage.clear();
  await сartPage.assertEmpty();
});

test("Changing quantity updates cart bage and input value", async ({ сartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await сartPage.open();
  await сartPage.addOneMoreSameCart();
  await homePage.assertCartBadgeCount(2);
  await сartPage.assertCatCounter("2");
});

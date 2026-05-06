import { questTest as test } from "../../fixtures/app.fixture";
import { CleanupApi } from "../api/CleanupApi";
import { testUsers } from "../data/testData";

test.describe("Auth", () => {
  let createdUserEmail: string | null = null;

  test.afterAll(async ({ request }) => {
    if (!createdUserEmail) return;

    const cleanApi = new CleanupApi(request);
    await cleanApi.deleteUserByEmail(createdUserEmail);

    createdUserEmail = null;
  });

  test("Sigh in", async ({ homePage, authPage }) => {
    await homePage.open();
    await authPage.signIn(testUsers.existing.email, testUsers.existing.password);
    await authPage.assertSignedIn();
  });

  test("Sigh up", async ({ homePage, authPage }) => {
    createdUserEmail = `${Date.now()}@test.ru`;

    await homePage.open();
    await authPage.signUp("Тест", createdUserEmail, testUsers.existing.password);
    await authPage.assertSignedIn();
  });

  test("Shows error for wrong password", async ({ homePage, authPage }) => {
    await homePage.open();
    await authPage.signIn(testUsers.existing.email, "wrong password");
    await authPage.assertError("Неверный email или пароль");
  });

  test("Reject dublicate registration", async ({ homePage, authPage }) => {
    await homePage.open();
    await authPage.signUp('test',testUsers.existing.email, testUsers.existing.password);
    await authPage.assertError("Пользователь с таким email уже существует");
  });
});

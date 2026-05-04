import { expect, type Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async signInInCheckout(email: string, password: string) {
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByLabel("Пароль").fill(password);
    await this.page.getByTestId("signInOrSignUpButton").click();
  }

  async fillAdress(addres: { city: string; street: string; house: string; apartmment: string; comment: string }) {
    await this.page.getByLabel("Город").fill(addres.city);
    await this.page.getByLabel("Улица").fill(addres.street);
    await this.page.getByLabel("Дом").fill(addres.house);
    await this.page.getByLabel("Квартира").fill(addres.apartmment);
    await this.page.getByLabel("Комментарий курьеру").fill(addres.comment);
  }

  async submit() {
    await this.page.getByTestId("approveOrder").click();
    await expect(this.page.getByTestId("modalTitle")).toHaveText("Заказ оформлен");
    await this.page.getByTestId("closeSubmittedModalButton").click();
  }
}

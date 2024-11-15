import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async FillLoginForm(firstName: string, lastName: string) {
    await this.page.locator("#email").fill(firstName);
    await this.page.locator("#field-password").fill(lastName);
    await this.page.getByRole("button", { name: "Најави се" }).click();
  }

  async NotValidUserName() {
    await this.page.getByText("Неуспешна најава.").isEnabled();
  }
}

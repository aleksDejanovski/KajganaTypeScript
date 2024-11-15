import { Page } from "@playwright/test";

export default class DashBoardPage {
  constructor(public page: Page) {}

  async navigateAndClickNajaviSe() {
    await this.page.getByRole("link", { name: "Најава" }).click();
    await this.page.waitForTimeout(3000);

    await this.page.getByRole("button", { name: "Најави се" }).click();
  }
}

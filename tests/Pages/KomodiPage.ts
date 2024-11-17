import { Page } from "@playwright/test";

export default class KomodiPage {
  constructor(public page: Page) {}

  async SearchGivenItem(text: string) {
    await this.page.getByPlaceholder("Внеси поим за пребарување...").fill(text);
    await this.page.locator(".tvheader-top-search-wrapper").click();
  }

  async ClickSearchedItem() {
    await this.page.getByRole("link", { name: "ТВ комода Linea", exact: true });
  }
}

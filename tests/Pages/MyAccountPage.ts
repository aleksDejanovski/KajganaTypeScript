import { Page } from "@playwright/test";
import { link } from "fs";

export default class MyAccountPage {
  constructor(public Page: Page) {}
  async IfIAmOnMyAccountPage() {
    await this.Page.getByRole('link', { name: 'Моја сметка', exact: true })
  }
}
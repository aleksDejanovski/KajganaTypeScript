import { chromium, expect, test } from "@playwright/test";
import { text } from "stream/consumers";

test("Login to Kajgana using valid credentials", async ({ page }) => {
  await page.goto("https://shop.kajgana.com/203-dom");
  await page.hover("text=Најава");

  await page.click("text=Најави се");

  await expect(
    page.locator("//h1[text()='Најавете се на вашата сметка']")
  ).toBeEnabled();
  await page.fill("#email", "dejanovski_a@yahoo.com");
  await page.waitForTimeout(3000);
  await page.fill("#field-password", "aA123456789");
  await page.getByRole("button", { name: "Најави се" }).click();
  await expect(page.getByRole("link", { name: "Моја сметка" })).toBeEnabled();
});

test("Log in to kajgana using invalid credentials", async ({ page }) => {
  await page.goto("https://shop.kajgana.com/203-dom");
  await page.hover("text=Најава");

  await page.click("text=Најави се");

  await expect(
    page.locator("//h1[text()='Најавете се на вашата сметка']")
  ).toBeEnabled();
  await page.fill("#email", "dejanovski123_a@yahoo.com");
  await page.waitForTimeout(3000);
  await page.fill("#field-password", "aA144rt6789");
  await page.getByRole("button", { name: "Најави се" }).click();
  await expect(page.locator("text=Неуспешна најава.")).toBeEnabled();
});

test("check my informations if there is no message", async ({ page }) => {
  await page.goto("https://shop.kajgana.com/203-dom");
  await page.hover("text=Најава");

  await page.click("text=Најави се");

  await expect(
    page.locator("//h1[text()='Најавете се на вашата сметка']")
  ).toBeEnabled();
  await page.fill("#email", "dejanovski_a@yahoo.com");
  await page.waitForTimeout(3000);
  await page.fill("#field-password", "aA123456789");
  await page.getByRole("button", { name: "Најави се" }).click();
  await page.getByRole("link", { name: "Мои известувања" }).click();
  await expect(page.getByText("Нема известувања.")).toBeEnabled();
});

test("Add to cart tegovi flow", async ({ page }) => {
  await page.goto("https://shop.kajgana.com/203-dom");
  await page.hover("text=Најава");

  await page.click("text=Најави се");

  await expect(
    page.locator("//h1[text()='Најавете се на вашата сметка']")
  ).toBeEnabled();
  await page.fill("#email", "dejanovski_a@yahoo.com");
  await page.waitForTimeout(3000);
  await page.fill("#field-password", "aA123456789");
  await page.getByRole("button", { name: "Најави се" }).click();
  await page.getByRole("link", { name: "Фитнес" }).hover();
  await page.getByRole("link", { name: "Справи и опрема за вежбање" }).click();
  await page.getByTitle("Тегови").click();

  await page
    .getByRole("link", { name: "Сет тегови 40 кг. Сет тегови 40 кг" })
    .click();
  await page.getByRole("button", { name: "Додај во кошничка" }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole("heading", { name: "Кошничка" })).toBeEnabled();
});

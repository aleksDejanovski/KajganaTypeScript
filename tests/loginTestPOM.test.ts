import { test } from "@playwright/test";
import { chromium, expect } from "@playwright/test";

import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";
import MyAccountPage from "./Pages/MyAccountPage";

test("login valid user POM", async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);

  await page.goto("https://shop.kajgana.com/203-dom");
  await dashBoardPage.navigateAndClickNajaviSe();
  await loginPage.FillLoginForm("dejanovski_a@yahoo.com", "aA123456789");
  await myAccountPage.IfIAmOnMyAccountPage();
});

test("login invalid username", async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  const loginPage = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);

  await page.goto("https://shop.kajgana.com/203-dom");
  await dashBoardPage.navigateAndClickNajaviSe();
  await loginPage.FillLoginForm("randomuser@yahoo.com", "aA123456789");
  await loginPage.NotValidUserName();
});

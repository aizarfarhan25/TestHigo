import { test, expect } from "@playwright/test";

test("Test Contact Higo Form", async ({ page }) => {
  await page.goto("https://higo.id/contact-us");
  await page.getByRole("button", { name: "Close" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "ex.Clara" }).click();
  await page.getByRole("textbox", { name: "ex.Clara" }).fill("Test");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "clara@gmail.com" }).click();
  await page
    .getByRole("textbox", { name: "clara@gmail.com" })
    .fill("testaizar@gmail.com");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "+628******" }).click();
  await page.getByRole("textbox", { name: "+628******" }).fill("081111111901");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "ex.HIGO" }).click();
  await page.getByRole("textbox", { name: "ex.HIGO" }).fill("Test");
  await page.waitForTimeout(1000);
  await page.getByRole("combobox").selectOption("Integrated Digital Agency");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Tulis pesan kamu" }).click();
  await page.getByRole("textbox", { name: "Tulis pesan kamu" }).fill("Test");
  await page.getByRole("button", { name: "Submit" }).click();
});

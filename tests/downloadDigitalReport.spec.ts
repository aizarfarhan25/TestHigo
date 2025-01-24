import { test, expect } from "@playwright/test";

test("Test Download Digital Report", async ({ page }) => {
  await page.goto("https://higo.id/annualreport2024");
  await page.getByRole("link", { name: "Baca Selengkapnya" }).click();
  await page.getByRole("button", { name: "Download Full Report" }).click();
  await page.waitForTimeout(1000);

  // Isi Form
  await page.getByRole("textbox", { name: "First Name" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("test");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Last Name" }).click();
  await page.getByRole("textbox", { name: "Last Name" }).fill("test");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testaizar@gmail.com");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Phone Number" }).click();
  await page
    .getByRole("textbox", { name: "Phone Number" })
    .fill("081146478902");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Company Name" }).click();
  await page.getByRole("textbox", { name: "Company Name" }).fill("test");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Job Title" }).click();
  await page.getByRole("textbox", { name: "Job Title" }).fill("test");
  await page.waitForTimeout(1000);

  // Click Download
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  const download = await downloadPromise;
});

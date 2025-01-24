import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Set tanggal dan waktu
  const now = new Date();
  const date = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  await page.goto("https://blog.higo.id/");
  await page.getByRole("link", { name: "Strategi Marketing Netflix" }).click();
  await page.getByRole("textbox", { name: "Tulis Nama Kamu" }).click();
  await page.getByRole("textbox", { name: "Tulis Nama Kamu" }).fill("Test");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Tulis Komentar Kamu" }).click();

  // Isi komentar dengan tanggal dan waktu
  await page
    .getByRole("textbox", { name: "Tulis Komentar Kamu" })
    .fill(`Test ${date}/${month}/${year}`);
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Suka" }).click();

  // Click Kirim
  await page.getByRole("button", { name: "Kirim" }).click();
});

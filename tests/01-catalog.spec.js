import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const card = (name) => page.locator('.card').filter({ has: page.getByRole('heading', { name, exact: true }) });
  await expect(card('Apple')).toBeVisible();
  await model.search('Red Lipstick');
  await expect(card('Red Lipstick')).toBeVisible();
  await expect(card('Apple')).toHaveCount(0);
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.selectBrand('Essence');
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.nextPage();
  // END
});


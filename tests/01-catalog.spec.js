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
  const card = (name) => page.locator('.card').filter({ has: page.getByRole('heading', { name, exact: true }) });
  await expect(card('Apple')).toBeVisible();
  await model.selectBrand('Essence');
  await expect(page.getByLabel('Essence', { exact: true })).toBeChecked();
  await expect(card('Essence Mascara Lash Princess')).toBeVisible();
  await expect(card('Apple')).toHaveCount(0);
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');
  await expect(page).toHaveURL(/\/products\/4$/);
  await expect(page.getByRole('heading', { name: 'Red Lipstick', exact: true })).toBeVisible();
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const card = (name) => page.locator('.card').filter({ has: page.getByRole('heading', { name, exact: true }) });
  await expect(card('Essence Mascara Lash Princess')).toBeVisible();
  await model.nextPage();
  await expect(card('Essence Mascara Lash Princess')).toHaveCount(0);
  await expect(page.locator('.card').first()).toBeVisible();
  // END
});


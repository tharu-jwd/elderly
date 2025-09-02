import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display sign in page', async ({ page }) => {
    await page.goto('/auth/signin');
    await expect(page.locator('h2')).toContainText('Sign In');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should display sign up page', async ({ page }) => {
    await page.goto('/auth/signup');
    await expect(page.locator('h2')).toContainText('Sign Up');
    await expect(page.locator('select')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test('should validate required fields on sign in', async ({ page }) => {
    await page.goto('/auth/signin');
    await page.click('button[type="submit"]');

    // HTML5 validation should prevent submission
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toHaveAttribute('required');
  });

  test('should validate password requirements on sign up', async ({ page }) => {
    await page.goto('/auth/signup');

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'weak');

    await page.click('button[type="submit"]');

    // Should show validation error
    await expect(page.locator('.alert-danger')).toBeVisible();
  });
});

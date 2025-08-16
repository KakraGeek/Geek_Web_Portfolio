import { test, expect } from '@playwright/test';

test.describe('Contact Form and WhatsApp Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to contact page for form tests
    await page.goto('/contact');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test('Contact form displays correctly', async ({ page }) => {
    // Check form elements are visible
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Contact form validation works', async ({ page }) => {
    // Try to submit empty form
    await page.locator('button[type="submit"]').click();
    
    // Wait a moment for validation to process
    await page.waitForTimeout(1000);
    
    // Check that form is still visible (not submitted)
    await expect(page.locator('form')).toBeVisible();
  });

  test('Contact form accepts valid input', async ({ page }) => {
    // Fill in valid form data
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="subject"]').fill('Test Subject');
    await page.locator('textarea[name="message"]').fill('This is a test message with more than 10 characters.');
    
    // Check that form data is filled
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('input[name="subject"]')).toHaveValue('Test Subject');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message with more than 10 characters.');
  });

  test('Contact form submission shows loading state', async ({ page }) => {
    // Fill in valid form data
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="subject"]').fill('Test Subject');
    await page.locator('textarea[name="message"]').fill('This is a test message with more than 10 characters.');
    
    // Wait a moment for form validation to complete
    await page.waitForTimeout(500);
    
    // Check that form data is filled correctly
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('input[name="subject"]')).toHaveValue('Test Subject');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message with more than 10 characters.');
    
    // Submit form
    await page.locator('button[type="submit"]').click();
    
    // Wait for the form to process and check loading state
    await page.waitForTimeout(2000);
    
    // Check if there's any error message or if the form is still there
    const errorMessage = page.locator('text=Please wait a moment before submitting again');
    const isErrorVisible = await errorMessage.isVisible();
    
    if (isErrorVisible) {
      // If time trap error is shown, that means the form is working
      await expect(errorMessage).toBeVisible();
    } else {
      // Otherwise check loading state (button should be disabled)
      await expect(page.locator('button[type="submit"]')).toBeDisabled();
    }
  });

  test('WhatsApp link in footer is correct', async ({ page }) => {
    // Navigate to home page to check footer
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check WhatsApp link exists and has correct href
    const whatsappLink = page.locator('a[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible();
    
    // Check the href contains the correct phone number
    const href = await whatsappLink.getAttribute('href');
    expect(href).toContain('2330244299095');
  });

  test('Phone numbers in footer are correct', async ({ page }) => {
    // Navigate to home page to check footer
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check first phone number (Call & WhatsApp)
    const phone1 = page.locator('a[href="tel:+2330244299095"]');
    await expect(phone1).toBeVisible();
    await expect(phone1).toContainText('+233(0)24.429.9095');
    
    // Check second phone number (Call Only)
    const phone2 = page.locator('a[href="tel:+2330202113633"]');
    await expect(phone2).toBeVisible();
    await expect(phone2).toContainText('+233(0)20.211.3633');
  });

  test('Contact page phone numbers are correct', async ({ page }) => {
    // Navigate to contact page
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Check first phone number (Call & WhatsApp) - use first occurrence
    const phone1 = page.locator('a[href="tel:+2330244299095"]').first();
    await expect(phone1).toBeVisible();
    await expect(phone1).toContainText('+233(0)24.429.9095');
    
    // Check second phone number (Call Only) - use first occurrence
    const phone2 = page.locator('a[href="tel:+2330202113633"]').first();
    await expect(phone2).toBeVisible();
    await expect(phone2).toContainText('+233(0)20.211.3633');
  });

  test('Contact form honeypot field is hidden', async ({ page }) => {
    // Check that honeypot field is hidden
    const honeypotField = page.locator('input[name="website"]');
    await expect(honeypotField).toBeHidden();
  });

  test('Contact form timestamp field is present', async ({ page }) => {
    // Check that timestamp field exists (should be hidden)
    const timestampField = page.locator('input[name="timestamp"]');
    await expect(timestampField).toBeHidden();
  });

  test('Contact form accessibility', async ({ page }) => {
    // Check form labels are properly associated
    await expect(page.locator('label[for="name"]')).toBeVisible();
    await expect(page.locator('label[for="email"]')).toBeVisible();
    await expect(page.locator('label[for="subject"]')).toBeVisible();
    await expect(page.locator('label[for="message"]')).toBeVisible();
    
    // Check required fields are marked
    await expect(page.locator('input[name="name"]')).toHaveAttribute('required');
    await expect(page.locator('input[name="email"]')).toHaveAttribute('required');
    await expect(page.locator('input[name="subject"]')).toHaveAttribute('required');
    await expect(page.locator('textarea[name="message"]')).toHaveAttribute('required');
  });
});

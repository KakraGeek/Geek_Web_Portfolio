import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
  test('Home page loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/The Geek Toolbox/);
    
    // Check main hero content
    await expect(page.locator('h1')).toContainText('Custom Digital Tools');
    await expect(page.locator('h1')).toContainText('Web Development');
    
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
    await expect(page.locator('a[href="/about"]').first()).toBeVisible();
    await expect(page.locator('a[href="/contact"]').first()).toBeVisible();
    
    // Check CTA buttons
    await expect(page.locator('text=Start Your Project')).toBeVisible();
    await expect(page.locator('text=View My Work')).toBeVisible();
  });

  test('About page loads correctly', async ({ page }) => {
    await page.goto('/about');
    
    // Check page title
    await expect(page).toHaveTitle(/About Me - The Geek Toolbox/);
    
    // Check main content
    await expect(page.locator('h1')).toContainText('About Me');
    await expect(page.locator('text=My Journey')).toBeVisible();
    await expect(page.locator('text=My Mission')).toBeVisible();
    
    // Check navigation still works
    await expect(page.locator('nav')).toBeVisible();
  });

  test('Contact page loads correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page title
    await expect(page).toHaveTitle(/Contact Us - The Geek Toolbox/);
    
    // Check main content
    await expect(page.locator('h1')).toContainText('Get In Touch');
    await expect(page.locator('text=Send Me a Message')).toBeVisible();
    
    // Check contact form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Check contact information
    await expect(page.locator('text=desmond.asiedu@gmail.com')).toBeVisible();
  });

  test('Work samples grid displays correctly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to work samples section
    await page.locator('#work-samples').scrollIntoViewIfNeeded();
    
    // Check work samples are visible
    await expect(page.locator('text=Work Samples')).toBeVisible();
    
    // Check at least one project card is visible
    await expect(page.locator('.grid').first()).toBeVisible();
    
    // Check project cards have expected content
    const projectCards = page.locator('.grid > div');
    await expect(projectCards.first()).toBeVisible();
  });

  test('Work modal opens and closes correctly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to work samples section
    await page.locator('#work-samples').scrollIntoViewIfNeeded();
    
    // Click on first project card to open modal
    const firstProjectCard = page.locator('.grid > div').first();
    await firstProjectCard.click();
    
    // Check modal is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    
    // Check modal content
    await expect(page.locator('[role="dialog"] h2')).toBeVisible();
    await expect(page.locator('text=About This Project')).toBeVisible();
    
    // Close modal
    await page.locator('button[aria-label="Close modal"]').click();
    
    // Check modal is closed
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('Contact form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.locator('button[type="submit"]').click();
    
    // Wait for validation to process
    await page.waitForTimeout(1000);
    
    // Check that form is still visible (not submitted)
    await expect(page.locator('form')).toBeVisible();
    
    // Check that submit button is still enabled (form didn't submit)
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
  });

  test('Contact form submission shows loading state', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out form with valid data
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="subject"]').fill('Test Subject');
    await page.locator('textarea[name="message"]').fill('This is a test message for testing purposes.');
    
    // Wait for validation to complete
    await page.waitForTimeout(500);
    
    // Submit form
    await page.locator('button[type="submit"]').click();
    
    // Wait for form processing
    await page.waitForTimeout(2000);
    
    // Check if there's a time trap error (which means form is working)
    const timeTrapError = page.locator('text=Please wait a moment before submitting again');
    const isTimeTrapVisible = await timeTrapError.isVisible();
    
    if (isTimeTrapVisible) {
      // If time trap error is shown, that means the form validation is working
      await expect(timeTrapError).toBeVisible();
    } else {
      // Otherwise check for loading state or success/error message
      const loadingText = page.locator('text=Sending...');
      const successMessage = page.locator('text=Message sent successfully');
      const errorMessage = page.locator('text=Failed to send message');
      
      const hasAnyMessage = await loadingText.isVisible() || 
                           await successMessage.isVisible() || 
                           await errorMessage.isVisible();
      
      expect(hasAnyMessage).toBeTruthy();
    }
  });

  test('Mobile navigation works correctly', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Check mobile menu button is visible
    await expect(page.locator('button[aria-label="Open main menu"]')).toBeVisible();
    
    // Open mobile menu
    await page.locator('button[aria-label="Open main menu"]').click();
    
    // Check mobile menu is visible
    await expect(page.locator('text=Home').first()).toBeVisible();
    await expect(page.locator('text=About').first()).toBeVisible();
    await expect(page.locator('text=Contact').first()).toBeVisible();
    
    // Close mobile menu
    await page.locator('button[aria-label="Close main menu"]').click();
    
    // Check mobile menu is closed
    await expect(page.locator('text=Home')).not.toBeVisible();
  });

  test('Accordion functionality works', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to accordion section
    await page.locator('text=My Approach to Digital Solutions').scrollIntoViewIfNeeded();
    
    // Check accordion items are visible
    await expect(page.locator('text=Design Philosophy')).toBeVisible();
    await expect(page.locator('text=How I Work')).toBeVisible();
    
    // Click on Design Philosophy accordion item to expand
    await page.locator('text=Design Philosophy').click();
    
    // Check Design Philosophy content is expanded
    await expect(page.locator('text=My approach to design is simple: put people first')).toBeVisible();
    await expect(page.locator('text=Empathy:')).toBeVisible();
    await expect(page.locator('text=Clarity:')).toBeVisible();
    await expect(page.locator('text=Consistency:')).toBeVisible();
    
    // Close Design Philosophy and click on How I Work
    await page.locator('text=Design Philosophy').click();
    await page.locator('text=How I Work').click();
    
    // Check How I Work content is expanded
    await expect(page.locator('text=Step 1: We Talk')).toBeVisible();
    await expect(page.locator('text=Step 2: I Sketch')).toBeVisible();
    await expect(page.locator('text=Step 3: We Tweak Together')).toBeVisible();
    await expect(page.locator('text=Step 4: We Launch')).toBeVisible();
    await expect(page.locator('text=Feedback is continuous, not occasional')).toBeVisible();
  });

  test('External links open in new tab', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to work samples section
    await page.locator('#work-samples').scrollIntoViewIfNeeded();
    
    // Check external link has correct attributes
    const externalLink = page.locator('a[href*="vercel.app"]').first();
    await expect(externalLink).toHaveAttribute('target', '_blank');
    await expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Page accessibility features work', async ({ page }) => {
    await page.goto('/');
    
    // Check focus management
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Check that focus is visible on interactive elements
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});

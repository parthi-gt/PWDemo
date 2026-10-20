import { test, expect } from '@playwright/test';
 
test('built-in locators on Playwright demo TodoMVC app', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
 
  // getByPlaceholder — the 'What needs to be done?' input
  const newTodo = page.getByPlaceholder('What needs to be done?');
  await newTodo.fill('Buy milk');
  await newTodo.press('Enter');
 
  await newTodo.fill('Walk the dog');
  await newTodo.press('Enter');
 
  // getByText — find the todo item we just created
  await expect(page.getByText('Buy milk')).toBeVisible();
 
  // getByRole — the checkbox button for a specific list item
  const buyMilkItem = page.getByRole('listitem').filter({ hasText: 'Buy milk' });
  await buyMilkItem.getByRole('checkbox').check();
 
  // Confirm it now shows as completed
  await expect(buyMilkItem).toHaveClass(/completed/);
});




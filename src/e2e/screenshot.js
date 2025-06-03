import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // デスクトップビュー
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4321/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'logs/screenshot-desktop.png', fullPage: true });
  
  // モバイルビュー
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'logs/screenshot-mobile.png', fullPage: true });

  await browser.close();
})();
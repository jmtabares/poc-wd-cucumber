import { elementIsVisible } from './common';
import { home } from '../screens/home';
import { pdp } from '../screens/pdp';
import { ElementHandle } from 'playwright/types/types';
import { difference, map, find } from 'lodash';
import { Page } from 'playwright';
export async function selectAvailable(
  page: any,
  items: ElementHandle<SVGElement | HTMLElement>[],
  index = 1,
) {
  const product = items[index];
  await product.waitForElementState('visible');
  await product.click();
  await elementIsVisible(page, pdp.product.page);
  await elementIsVisible(page, pdp.product.info);
}

export async function selectSize(page: any) {
  const selector = home.size.select;
  await page.waitForSelector(pdp.product.info);
  await elementIsVisible(page, pdp.product.info);
  let visible = await page.isVisible(selector);
  if (visible) {
    await page.click(selector).catch((e: any) => e);
    await elementIsVisible(page, home.size.div);
    await elementIsVisible(page, home.size.first);
    visible = await page.isVisible(home.size.leftItem).catch((e: any) => e);
    if (visible) await page.click(home.size.leftItem);
    else {
      const notAvailableSizes = await page.$$(home.size.notAvailable);
      const allSizes = await page.$$(home.size.all);
      const notAvailableIds = map(notAvailableSizes, 'elementId');
      const allIds = map(allSizes, 'elementId');

      const availableSizes = difference(allIds, notAvailableIds);
      const availableSize = find(allSizes, { elementId: availableSizes[0] });
      await availableSize.click();
    }
  }
}
/**
 * User click on add to bag button
 */
export async function addToBag(page: Page) {
  const selector = home.btn.addToBag;
  await elementIsVisible(page, selector);
  page.click(selector);
  await elementIsVisible(page, home.notification);
}

//import { get } from 'lodash';
import { ElementHandle } from 'playwright/types/types';
import { home } from "../screens/home";
import pdp from '../screens/pdp';
import { elementIsVisible } from "./common";
import { difference, map, find } from 'lodash';

// async function checkAvailable(items: ElementHandle<SVGElement | HTMLElement>[], index = 1) {
//   const availableItems: any = [];
//   let itemsCount = 0;
//   console.log(items)
//   items.find(async (item: any) => {
//     itemsCount += 1;
//     const sold = await item.$('.item__info__footer__soldout');
//     const visible = sold.isVisible();
//     console.log(`is viissble ${visible}`)
//     // if item has no class 'item__info__footer__soldout' its an available item
//     if (!visible) {
//       availableItems.push(item);
//       console.log('push')
//     } else { console.log('no push') }
//     return availableItems.length === index || items.length === itemsCount;
//   });
//   console.log(`items ${availableItems}`)
//   return get(availableItems, `[${index - 1}]`, null);
// }
export async function selectAvailable(page: any, items: ElementHandle<SVGElement | HTMLElement>[], index = 1) {

  //const typeCheck = await checkAvailable(items);

  //const item1 = '.list__container > .item';
  let product = items[index];
  // search for products with pagination

  // while (!product) {
  //   await elementIsVisible(page, home.product.listContainer);
  //   await elementIsVisible(page, home.product.first);
  //   let visible = await page.isVisible(home.product.list);
  //   if (!visible) {
  //     throw new Error('No Available Products found');
  //   }

  //   await elementIsVisible(page, home.product.list);
  //   await elementIsVisible(page, home.product.currentPage);
  //   await elementIsVisible(page, item1);
  //   visible = await page.isVisible(home.product.nextPage);
  //   if (visible) {
  //     // scroll(home.product.nextPage);
  //     await elementIsVisible(page, home.product.nextPage);
  //     await page.click(home.product.nextPage);
  //   } else {
  //     // if product not found select first product from the list
  //     throw new Error('No Available Products found');
  //   }
  //   //page.scroll(home.header);
  //   await elementIsVisible(page, home.product.list);
  //   await elementIsVisible(page, home.product.first);
  //   product = items[index];
  // }

  await product.waitForElementState('visible')
  await product.click()
  await elementIsVisible(page, pdp.product.page);
  await elementIsVisible(page, pdp.product.info);
}

export async function selectSize(page: any) {
  const selector = home.size.select;
  await page.waitForSelector(pdp.product.info)
  await elementIsVisible(page, pdp.product.info);
  let visible = await page.isVisible(selector);
  // if size selection is available
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
export async function addToBag(page: any) {
  const selector = home.btn.addToBag;
  await elementIsVisible(page, selector);
  page.click(selector);
  await elementIsVisible(page, home.notification);
}
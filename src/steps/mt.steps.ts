
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { home } from '../screens/home';
import { pdp } from '../screens/pdp'
import expect from 'expect';
import { category } from '../utils/home';
import { gateSelector, departmentIsVisible, elementIsVisible } from '../utils/common';
import { selectSize } from '../utils/product';
import { Page } from 'playwright';
const { base_url } = require('../utils/config');

Given('the user goes to the webshop', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto(base_url);
});


When('the user selects country {string} with id {string}', async function (this: ICustomWorld, country: string, id: string) {
  const page = this.page!;
  const countryId = `[data-id=${id}]`;
  await page.waitForSelector(home.preference.selector)
  await page.click(home.preference.selector)
  await page.waitForSelector(home.preference.modal)
  await page.click(home.preference.language);
  await page.waitForSelector(home.preference.countryList);
  await page.type(home.preference.searchInput, country)
  await page.waitForSelector(countryId);
  await page.click(countryId);

});

Then('the user selects language {string}', async function (this: ICustomWorld, language: string) {
  const page = this.page!;
  const selector = `[data-language=${language}]`;;
  await page.waitForSelector(selector)
  await page.click(selector);
  await page.click(home.preference.saveBtn)

  const visible = await page.isVisible(selector);
  expect(visible).toBeFalsy();
});

Then('the user  sees {string}', async function (this: ICustomWorld, translatedCountry: string) {
  const page = this.page!;
  await page.waitForSelector(home.preference.countryName)
  const content = await page.textContent(home.preference.countryName);
  expect(content).toBe(translatedCountry);


});

Then('the user  sees the gate page', async function (this: ICustomWorld) {
  const page = this.page!;
  await departmentIsVisible(page, 'women');
  await departmentIsVisible(page, 'men');
  await departmentIsVisible(page, 'kids');
  await elementIsVisible(page, home.search.open);
  await elementIsVisible(page, home.userActions.login);
  await elementIsVisible(page, home.userActions.wishlist);
  await elementIsVisible(page, home.userActions.cart);
  await elementIsVisible(page, home.banners.women);
  await elementIsVisible(page, home.banners.men);
  await elementIsVisible(page, home.banners.kids);
  await elementIsVisible(page, home.newArrivals.womenShop);
  await elementIsVisible(page, home.newArrivals.womenImages);
  await elementIsVisible(page, home.newArrivals.womenTitle);
  await elementIsVisible(page, home.footer.seo);
  await elementIsVisible(page, home.footer.preview);
  await elementIsVisible(page, home.footer.title);
  await elementIsVisible(page, home.footer.text);

});

Given('the user goes to {string} shop', async function (this: ICustomWorld, shop: string) {
  const page = this.page!;
  const selector = gateSelector(shop);
  await elementIsVisible(page, selector);
  await page.click(selector)
  await elementIsVisible(page, home.home.div);
  const url = page.url()
  expect(url).toContain(shop)
});

Given('the user goes to all {string}', async function (this: ICustomWorld, breadcrumb: string) {
  const page = this.page!;
  const selector = await category(page, breadcrumb);
  await page.click(selector);
  await page.click(selector);
  await elementIsVisible(page, '.list__header__title');
  const title = await (await page.$('.list__header__title'))?.innerText()
  expect(title?.toString().toUpperCase()).toContain(breadcrumb.toUpperCase())


});

Then('the user sees products on PLP', async function (this: ICustomWorld) {
  const page = this.page!;
  await elementIsVisible(page, home.search.plpProducts);
  await elementIsVisible(page, home.product.firstItem);
  const list = await page.$$(home.product.list);
  expect(list.length).toBeGreaterThanOrEqual(1);

});
async function selectFirstAvailableProduct(page: Page) {
  await elementIsVisible(page, home.product.firstItem);
  await elementIsVisible(page, '.app');
  await page.click(home.announcement);
  await elementIsVisible(page, '.item:nth-child(1):not(.item--soldout)>a')
  let items = await page.$$('.item:not(.item--soldout)>a');
  await items[1].click()
  await elementIsVisible(page, pdp.product.info);
  await elementIsVisible(page, pdp.product.page);
}
Then('the user goes to available product PDP', async function (this: ICustomWorld) {
  const page = this.page!;
  await selectFirstAvailableProduct(page);
});
Then('the user adds available product to bag', async function (this: ICustomWorld) {
  const page = this.page!;
  await selectFirstAvailableProduct(page)
  // await elementIsVisible(page, home.product.firstItem);
  // await elementIsVisible(page, '.app');
  // await page.click(home.announcement);
  // const items = await page.$$('.item:not(.item--soldout)');
  // await items[1].click()
  await selectSize(page);


  //addToBag(page);
  //selectAvailable(page, items);
});

Then('the user clear filters', async function (this: ICustomWorld) {
  const page = this.page!;
  await elementIsVisible(page, home.filter.tags);
  await elementIsVisible(page, home.filter.clearTags);
  await page.click(home.filter.clearTags);
});
const filterBySize = async (page: any, type: string, size: string) => {
  await elementIsVisible(page, type);
  await page.click(type);

  await elementIsVisible(page, size);
  await page.click(size);
  await page.click(type);
}
Given('the user filters by medium size', async function (this: ICustomWorld) {
  const page = this.page!;
  const type = '[data-facet="sizesHarmonized"]';
  const size = '[for="filter-sizesHarmonized-M"]';
  await filterBySize(page, type, size);
});
When('the user sees medium size jackets', async function (this: ICustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  return true;
});

Given('the user filter by category {string}', async function (this: ICustomWorld, category: string) {
  const page = this.page!;

  const categoriesFilters: { [index: string]: string } = {
    'previous weeks': '[for="filter-categories-346"]',
    'lounge wear': '[for="filter-categories-498"]',
    'essentials': '[for="filter-categories-379"]',
    'cold-weather chic': '[for="filter-categories-5732"]',
    'runway edit': '[for="filter-categories-550"]',
    'soon to be gone': '[for="filter-categories-3205"]',
    'evening': '[for="filter-categories-435"]',
    'wedding guest': '[for="filter-categories-270"]',
    'bridal': '[for="filter-categories-106"]',
    'workwear': '[for="filter-categories-322"]',
  };
  const selectors = {
    facet: ".filtersbardesktop__item [data-facet='categories']",
    items: ".filtersbardesktop__item__children [data-facet='categories']",
  };

  await elementIsVisible(page, selectors.facet);
  await page.click(selectors.facet);
  await elementIsVisible(page, categoriesFilters[category.toLowerCase()]);
  await page.click(categoriesFilters[category.toLowerCase()]);
  await page.click(selectors.facet);
});

Given('the user filter by designer {string}', async function (this: ICustomWorld, designer: string) {
  const page = this.page!;
  const selectors = {
    facet: ".filtersbardesktop__item [data-facet='designers']",
    search: "[name='search-designer']",
    item: `[for='filter-designers-${designer}']`,
  };

  await elementIsVisible(page, selectors.facet);
  await page.click(selectors.facet);
  await elementIsVisible(page, selectors.search);
  await page.fill(selectors.search, designer);
  await elementIsVisible(page, selectors.item);
  await page.click(selectors.item);
  await page.click(selectors.facet);
});

Given('the user filter by color {string}', async function (this: ICustomWorld, color: string) {
  const page = this.page!;
  const selectors = {
    facet: ".filtersbardesktop__item [data-facet='colors']",
    item: `[for='filter-colors-${color}'] > input`,
  };

  await elementIsVisible(page, selectors.facet);
  await page.click(selectors.facet);
  await elementIsVisible(page, selectors.item);
  await page.click(selectors.item);
  await page.click(selectors.facet);
});

Given('the user filter by pattern {string}', async function (this: ICustomWorld, pattern: string) {
  const page = this.page!;
  const selectors = {
    facet: ".filtersbardesktop__item [data-facet='patterns']",
    item: `[for='filter-patterns-${pattern}'] > input`,
  };
  await elementIsVisible(page, selectors.facet);
  await page.click(selectors.facet);
  await elementIsVisible(page, selectors.item);
  await page.click(selectors.item);
  await page.click(selectors.facet);
});

Given('the user sort products {string}', async function (this: ICustomWorld, sort: string) {
  const page = this.page!;
  const selectors = {
    facet: ".filtersbardesktop__item__button[data-facet='sort']",
    item: `.sortby__item[data-sort='${sort}']`,
  };
  await elementIsVisible(page, selectors.facet);
  await page.click(selectors.facet);
  await elementIsVisible(page, selectors.item);

  await page.click(selectors.item);

  await page.click(selectors.facet);
});


When('the user filter products with FTA', async function (this: ICustomWorld) {
  const page = this.page!;
  const selectors = {
    filter: 'div.content div.fta-filter > label > input',
  };
  await elementIsVisible(page, selectors.filter);
  await page.click(selectors.filter);
});

When('the user sees the home page for {string}', async function (this: ICustomWorld, department: string) {
  const page = this.page!;
  const selector = `.app[data-department='${department}']`;
  await elementIsVisible(page, '.app');
  let visible = await page.isVisible(selector);
  expect(visible).toBeTruthy()
  visible = await page.isVisible(`${selector} > .header`);
  expect(visible).toBeTruthy()
  visible = await page.isVisible(`${selector} > .content`);
  expect(visible).toBeTruthy()
  visible = await page.isVisible(`${selector} > .footer`);
  expect(visible).toBeTruthy()
});

Then('the user searchs for a {string}', async function (this: ICustomWorld, product: string) {
  const page = this.page!;
  await elementIsVisible(page, home.search.open);
  let visible = await page.isVisible(home.search.input);
  expect(visible).toBeFalsy()


  await page.click(home.search.open);
  await elementIsVisible(page, home.search.input);
  await elementIsVisible(page, home.search.close);


  await page.click(home.search.close);

  visible = await page.isVisible(home.search.input);
  expect(visible).toBeFalsy()

  await page.click(home.search.open);
  await elementIsVisible(page, home.search.input);
  await page.type(home.search.input, product);
  await elementIsVisible(page, home.search.flyout);
  await elementIsVisible(page, home.search.productImage);
  await page.keyboard.press('Enter')
  await elementIsVisible(page, home.search.plpProducts);
});

Then('the user sees Size Guide', async function (this: ICustomWorld) {
  const page = this.page!;
  const { size } = home;

  await elementIsVisible(page, size.guide);
  await page.click(size.guide);
  await elementIsVisible(page, size.measurement);
  await elementIsVisible(page, size.chart);

  await page.click(size.measurement);
  await elementIsVisible(page, size.measurementContent);

  await page.click(size.chart);
  await elementIsVisible(page, size.chart);

  await page.click(size.measurement);
  await elementIsVisible(page, size.measurementContent);

  await elementIsVisible(page, size.toggle);
  await page.click(size.toggle);
  await page.click(size.toggle);
});
async function closeModal(page: Page) {
  const { modal } = home;
  await elementIsVisible(page, modal.closeIcon);
  await page.click(modal.closeIcon);
};
Then('the user closes Size Guide', async function (this: ICustomWorld) {
  const page = this.page!;
  await closeModal(page)
});
import { hasKey } from './common';
import { home } from '../screens/home';
import { ICustomWorld } from '../support/custom-world';
import { get, find } from 'lodash';

export async function test(this: ICustomWorld) {
  const page = this.page!;
  const sessionStorage: any = await page.evaluate(() => JSON.stringify(sessionStorage));
  process.env.SESSION_STORAGE = sessionStorage;
  return sessionStorage;
}

export async function category(page: any, category: any) {
  const localStorage = JSON.parse(await getLocalStorage(page));
  const cookies = await getCookies(page);
  const languageData = localStorage.i18nextLng;
  const country = get(find(cookies, { name: home.cookies.country }), 'value', '');
  const shop = get(find(cookies, { name: home.cookies.shop }), 'value', '');

  const nav = {
    'new-arrivals': '.headerdesktop .nav .nav__item:nth-child(1) .nav__item__text__link',
  };
  const href_url = `/${country}/${languageData}/${shop}/${category.replace(' ', '-')}`;
  const href = `.headerdesktop [data-qa='departmentlinks'] [href='${href_url}']`;
  if (hasKey(nav, category)) {
    return nav[category];
  }
  return href;
}

export async function getSessionStorage(page: any) {
  const sessionStorage: any = await page.evaluate(() => JSON.stringify(sessionStorage));
  process.env.SESSION_STORAGE = sessionStorage;
  return sessionStorage;
}
export async function getLocalStorage(page: any) {
  const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));
  return localStorage;
}

export async function getCookies(page: any) {
  const cookies = await page.context().cookies();
  return cookies;
}

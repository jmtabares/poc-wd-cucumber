import { home } from '../screens/home';
import expect from 'expect';

export function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}
export function gateSelector(name: any) {
  if (hasKey(home.gateIndex, name)) {
    return `.content > .gate > .gate__section > div:nth-child(${home.gateIndex[name]}) > a`;
  }
  throw new Error(`Undefined parameter name ${name}`);
}
export async function departmentIsVisible(page: any, departmentName: string) {
  const department = gateSelector(departmentName);
  await elementIsVisible(page, department);
}

export async function elementIsVisible(page: any, element: string) {
  await page.waitForSelector(element);
  const visible = await page.isVisible(element);
  expect(visible).toBeTruthy();
}

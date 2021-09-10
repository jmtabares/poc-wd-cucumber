const finestEditDiv = '#root > div > div.content > div > div.finestedit';
const weeklyDiv = '#root > div > div.content > .home > .weekly--desktop';
const designersDiv = '#root > div > div.content > .home > .designers--desktop';
const bigSplitDiv = '#root > div > div.content > div > div.bigsplit';

const Shop = {
  home: '.home',
  banner: '.home > .bigbanner',
  image: '.home > .bigbanner > .bigbanner__link > .bigbanner__image',
  women: {
    shop: "[data-department='women']",
  },
  men: {
    shop: "[data-department='men']",
  },
  weekly: {
    div: weeklyDiv,
    tabs: `${weeklyDiv} > .weekly__content__tabs`,
    media: `${weeklyDiv} > .weekly__media`,
  },
  designers: {
    div: designersDiv,
    links: `${designersDiv} > .designers__links`,
    linkItems: `${designersDiv} > .designers__links > .designers__links__link`,
    media: `${designersDiv} > .designers__media`,
    mediaElements: `${designersDiv} > .designers__media > .designers__media__element`,
  },
  finestEdit: {
    div: finestEditDiv,
    title: `${finestEditDiv} .finestedit__copy__title`,
    description: `${finestEditDiv} .finestedit__copy__description`,
    gallery: `${finestEditDiv} .finestedit__gallery > .finestedit__gallery__item`,
  },
  threeBanners: {
    div: (child) => `#root > div > div.content > div > div:nth-child(${child})`,
    /**
       * get pre header class
       * @param {number} child three topics div
       * @param {number} i row number
       * @param {number} j preheader number
       * @returns {string} css class
       */
    preHeader(child, i, j) {
      return `${this.div(child)} [data-qa='row-${i}'] [data-qa='preheader-${j}'] > a > p`;
    },
    /**
       * get headline class
       * @param {number} child three topics div
       * @param {number} i row number
       * @param {number} j headline number
       * @returns {string} css class
       */
    headline(child, i, j) {
      return `${this.div(child)} [data-qa='row-${i}'] [data-qa='headline-${j}'] > a > p`;
    },
    /**
       * get banner class
       * @param {number} child three topics div
       * @param {number} i row number
       * @param {number} j headline number
       * @returns {string} css class
       */
    banner(child, i, j) {
      return `${this.div(child)} [data-qa='block-${i}'] [data-qa='banner-${j}'] > a > div`;
    },
  },
  kids: {
    bigSplit: bigSplitDiv,
    item1: {
      div: `${bigSplitDiv} > div:nth-child(1)`,
      headline: `${bigSplitDiv} > div:nth-child(1) > a > div.bigsplit__item__copy__headline`,
      title: `${bigSplitDiv} > div:nth-child(1) > a > div.bigsplit__item__copy__title`,
    },
    item2: {
      div: `${bigSplitDiv} > div:nth-child(2)`,
      headline: `${bigSplitDiv} > div:nth-child(2) > a > div.bigsplit__item__copy__headline`,
      title: `${bigSplitDiv} > div:nth-child(2) > a > div.bigsplit__item__copy__title`,
    },
    Girls: '0',
    Boys: '1',
    Baby: '2',
    banner(name) {
      const index = this[name];
      return `div.content > div > div.threebigbanners > [data-item='${index}'] > .threebigbanners__item__copy`;
    },
  },
};

export default Shop;

export const pdp = {
  plp: {
    list: '#root > div > div.content > div > div.list__container',
  },
  product: {
    page: '.product',
    info: '.product .product__area > .product__area__information',
  },
  price: {
    benefits: '.productinfo .productinfo__pricedescription > .productinfo__pricedescription__benefits',
    desc: '.productinfo .productinfo__pricedescription',
    converted: '.productinfo .pricing > .pricing__converted',
    usd: '.product .pricing .pricing__price__amount',
  },
  sizeFit: {
    header: ".productinfo .accordion > .accordion__item > [data-index='1']",
    active: '.productinfo .accordion__item--active',
    content: '.productinfo .accordion__item--active .accordion__body__content',
    helpContact: '.productinfo .accordion__item--active .accordion__body__content > div > p',
  },
};

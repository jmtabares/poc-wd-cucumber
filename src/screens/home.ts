export const home = {
  pause: '1000',
  pause3: '3000',
  header: '.header',
  modal: {
    closeIcon: '#portal > div > div > div.modal__content__close > span',
  },
  cookies: {
    storeCode: 'storeCode',
    language: 'language',
    shop: 'myta_department',
    country: 'myta_geo',
  },
  localStorage: {
    i18nextLng: 'i18nextLng',
  },
  sessionStorage: {
    anReferrer: 'anReferrer',
    data: 'anData-MYTH',
  },
  home: {
    div: '.home',
  },
  announcement: '.announcement .announcement__contents',
  notification: '.notification__content',
  userActions: {
    login: '.useractions > a > .icon__user',
    wishlist: '.useractions > a > .icon__star',
    cart: '.useractions > a.shoppingbag > .icon__bag',
  },
  banners: {
    women: '.content .gate .gate__section:nth-child(1) .gate__department:nth-child(1)',
    men: '.content .gate .gate__section:nth-child(1) .gate__department:nth-child(2)',
    kids: '.content .gate .gate__section:nth-child(1) .gate__department:nth-child(3)',
  },
  newArrivals: {
    // eslint-disable-next-line max-len
    womenTitle:
      '.content .gate .gate__section:nth-child(2) .productcarousel .productcarousel__title',
    // eslint-disable-next-line max-len
    womenImages:
      '.content .gate .gate__section:nth-child(2) .productcarousel .productcarousel__carousel .carousel__items',
    womenShop: '.content .gate .gate__section:nth-child(2) .productcarousel .productcarousel__cta',
    men: '.content .gate .gate__section:nth-child(3) .gate__shop:nth-child(2)',
    kids: '.content .gate .gate__section:nth-child(4) .gate__shop:nth-child(3)',
  },
  privacy: {
    cookies: ['TC_PRIVACY_CENTER', 'TC_PRIVACY'],
    text: '#tc_privacy_text',
    div: '#tc_privacy',
    btn: '#tc_privacy_button',
    detailBtn: '#privacy-cat-modal > div > div > div.modal-footer > button.btn.btn-all',
    iframe: '#privacy-iframe',
    iframeTitle: '#privacy-cat-modal-title',
    iframeBody: '#privacy-cat-modal > div > div > div.modal-body > div',
  },
  preference: {
    selector: '.headerdesktop .siteactions .siteactions__link > .countryselector',
    newsLetter: '.headerdesktop .siteactions > span:nth-child(2)',
    modal: '.countryselectormodal',
    language: '.languageselector__country',
    countryList: '.countryselectormodal--slided',
    saveBtn: '.languageselector__footer > .button',
    searchInput: 'div.countrylist__search > div > input',
    countryItem: '.countrylist__item',
    countryName: '.headerdesktop .countryselector > span',
    languageList: '.languageselector__language__item',
  },
  gateIndex: {
    women: '1',
    men: '2',
    kids: '3',
  },
  btn: {
    addToBag: '.productbuttons > .button',
  },
  size: {
    div: '.dropdown__options .os-content',
    select: '.sizeselector .dropdown__select',
    guide: '.sizeselector .sizeguidelink',
    available: ".simplebar-content > [data-qa='size-available']",
    first: '[data-qa="sizes"]:nth-child(1)',
    leftItem: '.sizeitem .sizeitem__quantityleft',
    wishlistSize: '.simplebar-content > .sizeitem > .sizeitem__wrapper > .sizeitem__addtowishlist',
    wishlistBtn: '.productactions--desktop .button > .button__text > .button__wishlisticon',
    wishlistStar: '.productactionsdesktop .productbuttons .button--inwishlist',
    modal: '.sizeguidemodal',
    chart: ".sizeguidemodal > .tabs > .tabs__header > [data-key='0']",
    measurement: ".sizeguidemodal > .tabs > .tabs__header > [data-key='1']",
    measurementContent: '.sizeguidemodal > .tabs > .tabs__content > .measurements',
    chartContent: '.sizeguidemodal > .tabs > .tabs__content > .sizechart',
    toggle: '.measurements__toggle > .toggle > .toggle__button',
    notAvailable:
      '.dropdown__options .simplebar-wrapper .simplebar-content > .sizeitem--notavailable',
    all: '.dropdown__options .simplebar-wrapper .simplebar-content > .sizeitem',
    wishListBtn:
      '.product__area__information .productinfo .productactions .productbuttons .button__wishlisticon',
  },
  product: {
    listContainer: '.app > .content > .list',
    first:
      '.content > div > div.list__container > div:nth-child(1) > a > div > div:nth-child(1) > img',
    firstItem: 'div.content > div > div.list__container > div:nth-child(1)',
    list: 'div.list__container > div.item',
    currentPage: '.pagination__item__selected',
    nextPage: "[data-label='nextPage']",
  },
  search: {
    open: '.headerdesktop .search__box > .icon__search',
    close: '.headerdesktop .search__box > .icon__close',
    input: '.header--desktop .search__box.search__box--open > input',
    flyout: '.headerdesktop .search__flyout--open',
    productList: '.headerdesktop .search__flyout__products__list',
    flyoutList: '.headerdesktop .search__flyout__list',
    productImage: '.headerdesktop .search__flyout__product__image',
    plpProducts: '.list__container > .item',
  },
  filter: {
    tags: '.filterstags > .filterstags__tag',
    clearTags: '.filterstags > .filterstags__clearall',
  },
  footer: {
    seo: '.content > .gate > .seofooter',
    preview: '.content > .gate > .seofooter > .seofooter__preview',
    title: '.content > .gate > .seofooter > .seofooter__preview > .seofooter__title',
    text: '.content > .gate > .seofooter > .seofooter__preview > .seofooter__content__text',
  },
};

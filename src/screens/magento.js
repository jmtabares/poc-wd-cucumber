const Magento = {
  navContainer: '#header_nav_wrapper_desktop',
  steps: {
    cart: '#opc-cart > div',
  },
  wishlist: {
    icon: '.headerdesktop__section__wrapper__icons > .useractions > a > .icon__star',
    title: '#wishlist-item-list > div.toolbar-top .count-container',
    table: '#wishlist-item-list > ul',
    list: '#wishlist-item-list > ul > li',
  },
  bag: {
    campaign: '#campaign_container',
    monetate: '#monetate_selectorHTML_ad22f6f0_0 > h1',
    icon: '.headerdesktop__section__wrapper__icons > div > a.cart > .icon__bag',
    title: '.main-container.col1-layout > div > div > div > div.page-title > h1',
    proceedBtn: '#qa-shopping-bag-proceed-button-1',
    table: '#shopping-cart-table',
    tableRow: '#shopping-cart-table > tbody > tr',
    checkOutDiv: '#checkout-step-login',
    proceedNoLoginBtn: '#qa-login-button-register',
    proceedLoginBtn: '#qa-login-button-login',
    shippingCol: '#co-delivery-form .shipping-col',
    billingCol: '#co-delivery-form .billing-col',
    shippingMethodDiv: '#checkout-shipping-method-load',
    removeProduct:
      '#shopping-cart-table > tbody > tr > td.product-cart-info > div.action-items-wrapper > p.product-cart-remove-item',
  },
  login: {
    form: {
      emailRequired: '#advice-required-entry-login-email',
      passwordRequired: '#advice-required-entry-login-password',
      email: '#login-email',
      password: '#login-password',
      btn: '#login-form > div > ul > li:nth-child(3) > p',
    },
  },
  payment: {
    confirm: {
      review: '#checkout-step-review',
      intro: '#checkout-review-load > div.block.opc-block-intro',
      shipping: '#shipping-progress-opcheckout',
      billing: '#billing-progress-opcheckout',
      shippingMethod: '#shipping_method-progress-opcheckout',
      packageProgress: '#packaging-progress-opcheckout',
      paymentProgress: '#payment-progress-opcheckout',
      bag: '#checkout-review-table',
      bagTotal: '#review-totals-table',
      completeBtn: '#review-buttons-container > button',
    },
    form: {
      div: '#shipping-new-address-form',
      checkbox: {
        prefix: '.name-prefix ',
        Miss: '#qa-registration-form-prefix',
        'Mrs.': '#qa-registration-form-prefix-1',
        'Mr.': '#qa-registration-form-prefix-2',
        'Dr.': '#qa-registration-form-prefix-2',
      },
      firstName: '#shipping\\:firstname',
      lastName: '#shipping\\:lastname',
      companyName: '#shipping\\:company',
      email: '#shipping\\:email',
      street1: '#shipping\\:street1',
      street2: '#shipping\\:street2',
      house: '#shipping\\:house_number',
      code: '#shipping\\:postcode',
      city: '#shipping\\:city',
      telephone: '#shipping\\:telephone',
      cardNumber: '#encryptedCardNumber',
      cardExpiry: '#encryptedExpiryDate',
      cardCVV: '#encryptedSecurityCode',
      region: '#shipping\\:region_id',
    },
    deliveryBtn: '#delivery-buttons-container > div.button-wrapper > button',
    cardPaymentCheck: '#p_method_adyen_cc',
    cardForm: {
      div: '#payment_form_adyen_cc',
      cardName:
        '#cardContainer span.adyen-checkout__input-wrapper > input.adyen-checkout__input--text',
    },
    paymentBth: '#payment-buttons-container > div > button',
    iframes: {
      number:
        '#cardContainer .adyen-checkout__card__form .adyen-checkout__card__cardNumber__input iframe',
      expiry:
        '#cardContainer .adyen-checkout__card__form .adyen-checkout__card__exp-cvc .adyen-checkout__field--expiryDate iframe',
      CVV: '#cardContainer .adyen-checkout__card__form .adyen-checkout__card__exp-cvc .adyen-checkout__card__cvc__input iframe',
    },
  },
};

export default Magento;

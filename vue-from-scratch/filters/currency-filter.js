Vue.filter('currency_filter', (value, currency) => {
  return `${value}${currency}`
});
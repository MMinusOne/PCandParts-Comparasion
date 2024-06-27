const jaro = require("jaro-winkler");

module.exports = async (shortDesc, SKU) => {
  const data = await fetch(
    "https://filter.freshclick.co.uk/Category_filter/ajax_search_products",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "https://ayoubcomputers.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `site=sp9oc95xrw&search_keyword=${SKU}&customer_group=13&currency=&freshClickSearchCategory=0&channel_id=1`,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  ).then((r) => r.json());
  const firstProduct =
    data?.products?.length === 1
      ? data.products.at(0)
      : data?.products
          ?.sort((a, b) => {
            return jaro(a.title, shortDesc) - jaro(b.title, shortDesc);
          })
          ?.at(-1);
  if (firstProduct) {
    if (firstProduct.is_price_hidden === 1) {
      firstProduct.price = undefined;
      firstProduct.sale_price = undefined;
    }
    return firstProduct;
  } else {
    return undefined;
  }
};

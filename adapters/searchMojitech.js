const { JSDOM } = require("jsdom");
const jaro = require("jaro-winkler");

module.exports = async (shortDesc, SKU) => {
  const data = await fetch(
    `https://mojitech.net/wp-admin/admin-ajax.php?action=flatsome_ajax_search_products&query=${SKU}`,
    {
      headers: {
        accept: "text/plain, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "_ga=GA1.1.1885704519.1719211478; _fbp=fb.1.1719211487680.869729358574663001; yith_wcwl_session_dd4093da74b66010792f110a4047a79c=%7B%22session_id%22%3A%221a2e0ac656d5e4b0d5ec54dae57d8822%22%2C%22session_expiration%22%3A1721886860%2C%22session_expiring%22%3A1721883260%2C%22cookie_hash%22%3A%22df0b9f9c5a26fdd6fa8991875c842d11%22%7D; _gcl_au=1.1.959728045.1719211479.1162479033.1719317086.1719317086; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_first_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_current=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; sbjs_first=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; PHPSESSID=c0685c93c11c66dea1ca08c66814b18e; sbjs_udata=vst%3D2%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F126.0.0.0%20Safari%2F537.36; sbjs_session=pgs%3D1%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fmojitech.net%2F; _ga_NYSNB7L639=GS1.1.1719394876.13.1.1719394878.58.0.1304943209; TawkConnectionTime=0; twk_uuid_55852a6f3d6a6cf375cfde80=%7B%22uuid%22%3A%221.SwtYKuKXeCHGOSZ9r99WdXFG2iJmUlTSv4DDbe7VzXImFDms2eC7pEG0lhvh3g7BBq0dKyBcfV7NOLh5uBmQS0yykODvmg556nq9A0rRYxg7fxriym8jK%22%2C%22version%22%3A3%2C%22domain%22%3A%22mojitech.net%22%2C%22ts%22%3A1719394880878%7D",
        Referer: "https://mojitech.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  ).then((r) => r.json());

  const suggestions =
    data?.products?.length === 1
      ? data.products.at(0)
      : data?.suggestions?.sort((a, b) => {
          console.log(a?.value, b?.value);
          const diffA = jaro(a.value, shortDesc);
          const diffB = jaro(b.value, shortDesc);
          return diffA - diffB;
        });
  const firstSuggestion = suggestions ? suggestions.at(-1) : undefined;
  if (firstSuggestion) {
    const jsdom = new JSDOM(firstSuggestion.price);
    const doc = jsdom.window.document;
    const diggedPriceElement =
      (doc.querySelector("strong")
        ? undefined
        : [...doc.querySelectorAll("bdi")].at(-1)) || undefined;
    diggedPriceElement?.removeChild(diggedPriceElement.querySelector("span"));
    const diggedPrice = diggedPriceElement?.innerHTML;
    firstSuggestion.price = diggedPrice;
  }

  return firstSuggestion;
};

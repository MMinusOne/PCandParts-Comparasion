const xlsx = require("xlsx");
const csvToJson = require("./utils/csvToJson");
const searchAyoub = require("./adapters/searchAyoub");
const searchMojitech = require("./adapters/searchMojitech");
const searchPcAndParts = require("./adapters/searchPcAndParts");
const pcandpartsData = csvToJson("./data.xlsx")
  .sort((a, b) => {
    const aPrice = a.price !== undefined ? a.price : Infinity;
    const bPrice = b.price !== undefined ? b.price : Infinity;
    return aPrice - bPrice;
  })
  .slice(2700)
  .filter((e) => e.price)
  .reverse();
console.log(pcandpartsData.length);
const outPath = "./output.csv";
// NOTE: cloud-flare side effect
// NOTE: Get price from website via csv SKU
// SAFETY: anti-detection interval, proxies
function stringToNumber(str) {
  if (!str) return;
  const cleanedStr = str.toString().replace(/,/g, "").replace(/\s/g, "");
  const number = parseFloat(cleanedStr);
  if (isNaN(number)) {
    return null;
  } else {
    return number;
  }
}

const fetchData = async (shortDescription = "", SKU) => {
  console.log(shortDescription);
  const ayoubDataCell = await searchAyoub(shortDescription, SKU);
  const mojitechDataCell = await searchMojitech(shortDescription, SKU);
  const pcandpartsCell = await searchPcAndParts(shortDescription, SKU);

  return {
    SKU: SKU,
    prices: {
      ayoub: stringToNumber(ayoubDataCell?.price),
      mojitech: stringToNumber(mojitechDataCell?.price),
      pcandparts: stringToNumber(pcandpartsCell?.price),
    },
  };
};

const formatData = (data) => {
  const VAT = 1.11;
  return data.map((cell) => {
    const pcandpartsMojitechDiff =
      cell.prices.pcandparts - cell.prices.mojitech;
    const pcandpartsAyoubDiff =
      cell.prices.pcandparts - cell.prices.ayoub * VAT;
    console.log(pcandpartsMojitechDiff, pcandpartsAyoubDiff);
    if (pcandpartsAyoubDiff > 0 || pcandpartsMojitechDiff > 0) {
      const data = {
        SKU: cell.SKU,
        "PC and Parts Price": cell.prices.pcandparts || "",
        "Mojitech Price": cell.prices.mojitech || "",
        "Ayoub Computers Price": cell.prices.ayoub * VAT || "",
        "PCAndParts/Mojitech Price difference": pcandpartsMojitechDiff || "",
        "PCandParts/AyoubComputers Price difference": pcandpartsAyoubDiff || "",
      };

      console.log(data);
      return data;
    }
  });
};

const updateSheet = (jsonData) => {
  const worksheet = xlsx.utils.json_to_sheet(jsonData);
  const workbook = xlsx.utils.book_new();

  xlsx.utils.book_append_sheet(workbook, worksheet, "Market Prices");
  xlsx.writeFile(workbook, outPath);
};

const main = async () => {
  const items = [];
  for (const pcandpartsCellIndex in pcandpartsData) {
    const { SKU, shortDescription } = pcandpartsData.at(pcandpartsCellIndex);
    const data = await fetchData(shortDescription, SKU);
    items.push(data);
  }

  const csvData = await formatData(items);
  updateSheet(csvData.filter((e) => e));
};

main();

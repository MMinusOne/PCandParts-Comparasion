const XLSX = require("xlsx");

module.exports = function xlsxToJson(filePath) {
  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  return jsonData.map((cell) => {
    return {
      category: cell.cat1,
      brand: cell["brand-5"],
      taxxed: cell["tax-15"] === "taxable" ? true : false,
      price: cell.Price,
      shortDescription: cell[" Short Description"],
      SKU: cell["Model #"],
    };
  });
};

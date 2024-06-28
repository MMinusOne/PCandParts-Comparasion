const formatKeys = (dataCell) => {
  const keys = {};
  Object.keys(dataCell).forEach((key) => {
    const value = dataCell[key];
    const formattedKey = key
      .toLowerCase()
      .split(" ")
      .filter((e) => e.length)
      .join("-")
      .toLowerCase();
    keys[formattedKey] = value;
  });

  return keys;
};

export default function formatData(jsonData) {
  return jsonData.map((cell) => {
    const formattedCell = formatKeys(cell);

    const category = formattedCell.cat1;
    const taxxed = formattedCell["tax-15"] === "taxable" ? true : false;
    const price = formattedCell.price;
    const shortDescription = formattedCell["short-description"];
    const SKU = formattedCell["model-#"];
    if (category && price) {
      return {
        category: category,
        taxxed: taxxed,
        price: price,
        shortDescription: shortDescription,
        SKU: SKU,
      }; 
    }
  }).filter((e) => e);
}

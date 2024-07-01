export default function formatToCsv(data, tax, lowerType) {
  return data
    .map((cell) => {
      const pcandpartsPrice =
        parseInt(cell.prices.pcandparts) * (cell.taxes.pcandpartsHas ? 1 : tax);
      const mojitechPrice = parseInt(cell.prices.mojitech);
      const ayoubPrice = parseInt(cell.prices.ayoub);
      const pcandpartsMojitechDiff =
        pcandpartsPrice - mojitechPrice * (cell.taxes.mojitechHas ? 1 : tax);
      const pcandpartsAyoubDiff = pcandpartsPrice - cell.prices.ayoub * tax;
      const condition =
        lowerType === 0
          ? pcandpartsAyoubDiff > 0 || pcandpartsMojitechDiff > 0
          : pcandpartsAyoubDiff < 0 || pcandpartsMojitechDiff < 0;
          
      if (condition) {
        const data = {
          SKU: cell.SKU,
          "Description": cell.shortDescription,
          "PC and Parts Price": pcandpartsPrice || "",
          "Mojitech Price": mojitechPrice || "",
          "Ayoub Computers Price": ayoubPrice * tax || "",
          "PCAndParts/Mojitech Price difference": pcandpartsMojitechDiff || "",
          "PCandParts/AyoubComputers Price difference":
            pcandpartsAyoubDiff || "",
        };
        return data;
      }
    })
    .filter((e) => e);
}

export default function formatToCsv(data, tax, lowerType) {
  return data
    .map((cell) => {
      const pcandpartsPrice =
        cell.prices.pcandparts * (cell.taxes.pcandpartsHas ? 1 : tax);
      const pcandpartsMojitechDiff =
        pcandpartsPrice -
        cell.prices.mojitech * (cell.taxes.mojitechHas ? 1 : tax);
      const pcandpartsAyoubDiff = pcandpartsPrice - cell.prices.ayoub * tax;
      const condition =
        lowerType === 0
          ? pcandpartsAyoubDiff > 0 || pcandpartsMojitechDiff > 0
          : pcandpartsAyoubDiff < 0 || pcandpartsMojitechDiff < 0;
      if (condition) {
        const data = {
          SKU: cell.SKU,
          "PC and Parts Price": cell.prices.pcandparts || "",
          "Mojitech Price": cell.prices.mojitech || "",
          "Ayoub Computers Price": cell.prices.ayoub * tax || "",
          "PCAndParts/Mojitech Price difference": pcandpartsMojitechDiff || "",
          "PCandParts/AyoubComputers Price difference":
            pcandpartsAyoubDiff || "",
        };
        return data;
      }
    })
    .filter((e) => e);
}

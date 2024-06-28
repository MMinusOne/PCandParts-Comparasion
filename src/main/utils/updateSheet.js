export default  (jsonData) => {
    const worksheet = xlsx.utils.json_to_sheet(jsonData);
    const workbook = xlsx.utils.book_new();
  
    xlsx.utils.book_append_sheet(workbook, worksheet, "Market Prices");
    // xlsx.writeFile(workbook, outPath);
  };
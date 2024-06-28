export default function stringToNumber(str) {
  if (!str) return;
  const cleanedStr = str.toString().replace(/,/g, "").replace(/\s/g, "");
  const number = parseFloat(cleanedStr);
  if (isNaN(number)) {
    return null;
  } else {
    return number;
  }
};

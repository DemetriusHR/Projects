export function dateBirthdayConvert(date) {
  const dayData = date.substring(8, 10);
  const mouthData = date.substring(5, 7);
  const yearData = date.substring(0, 4);

  date = dayData + "/" + mouthData + "/" + yearData;

  return date;
}

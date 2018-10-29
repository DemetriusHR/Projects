export function dateConvert(date) {
  const minNow = new Date().getMinutes();
  const hrsNow = new Date().getHours();
  const dayNow = new Date().getDate();
  const mouthNow = new Date().getMonth() + 1;
  const yearNow = new Date().getFullYear();
  const hrsPlusminNow = parseInt(
    hrsNow + (minNow < 10 ? "0" : "") + minNow,
    10
  );

  //Variaveis de Datas Registradas no Banco
  const minData = parseInt(date.substring(14, 16), 10);
  const hrsData = parseInt(date.substring(11, 13), 10);
  const dayData = parseInt(date.substring(0, 2), 10);
  const mouthData = parseInt(date.substring(3, 5), 10);
  const yearData = parseInt(date.substring(6, 10), 10);
  const hrsPlusminData = parseInt(
    hrsData + (minData < 10 ? "0" : "") + minData,
    10
  );
  const lastDayofMouth = new Date(yearData, mouthData, 0).getDate();

  //Variaveis de Comparações
  let minCompare = minData > minNow ? 60 - minData + minNow : minNow - minData;

  let hrsCompare = (hrsPlusminNow - (hrsPlusminData + 40)) / 60;
  hrsCompare =
    dayData > dayNow && hrsData >= hrsNow
      ? 24 + (minData > minNow ? hrsNow - 1 - hrsData : hrsNow - hrsData)
      : hrsCompare;

  let dayCompare =
    mouthData < mouthNow ? lastDayofMouth - dayData + dayNow : dayNow - dayData;
  dayCompare =
    hrsData >= hrsNow && minData > minNow ? dayCompare - 1 : dayCompare;

  let mouthCompare = mouthNow - mouthData;

  mouthCompare =
    mouthCompare > 0
      ? dayCompare >= lastDayofMouth
        ? mouthCompare
        : mouthCompare - 1
      : mouthCompare;
  mouthCompare = yearNow > yearData ? 12 - mouthCompare : mouthCompare;

  dayCompare =
    dayCompare > lastDayofMouth ? dayCompare - lastDayofMouth : dayCompare;

  let yearCompare = yearNow - yearData;

  yearCompare =
    yearCompare > 0 && mouthCompare % 12 === 0
      ? yearCompare > 0 && dayCompare > 0
        ? yearCompare
        : yearCompare - 1
      : yearCompare - 1;

  return yearCompare > 0
    ? yearCompare > 1
      ? yearCompare + " anos"
      : yearCompare + " ano"
    : mouthCompare > 0
      ? mouthCompare > 1
        ? mouthCompare + " meses"
        : mouthCompare + " mês"
      : dayCompare > 0
        ? dayCompare > 1
          ? dayCompare + " dias"
          : dayCompare + " dia"
        : hrsCompare < 1
          ? minCompare < 1
            ? " segundos atrás"
            : minCompare === 1
              ? minCompare + " minuto"
              : minCompare + " minutos"
          : parseInt(hrsCompare, 10) === 1
            ? parseInt(hrsCompare, 10) + " hora"
            : parseInt(hrsCompare, 10) + " horas";
}

export function dateNow() {
  let day = new Date().getDate();
  let mouth = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let hrs = new Date().getHours();
  let min = new Date().getMinutes();
  let date =
    (day < 10 ? "0" + day : day) +
    "/" +
    (mouth < 10 ? "0" + mouth : mouth) +
    "/" +
    year +
    " " +
    (hrs < 10 ? "0" + hrs : hrs) +
    ":" +
    (min < 10 ? "0" + min : min);

  return date;
}

export function dateConvertData(data, idProfile) {
  const array = data.filter(el => {
    return el.idProfile === idProfile;
  });

  return dateConvert(array[0].dateOfComment);
}

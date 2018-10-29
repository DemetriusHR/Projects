export function dateConvert(date) {
  const yearNow = new Date().getFullYear();

  //Variaveis de Datas Registradas no Banco
  const dayData = parseInt(date.substring(0, 2), 10);
  const mouthData = parseInt(date.substring(3, 5), 10);
  const yearData = parseInt(date.substring(6, 10), 10);

  //Variaveis de Comparações
  let yearCompare = yearNow - yearData;
  let mouthCompare =
    mouthData === 1
      ? "Jan"
      : mouthData === 2
        ? "Fev"
        : mouthData === 3
          ? "Mar"
          : mouthData === 4
            ? "Abr"
            : mouthData === 5
              ? "Mai"
              : mouthData === 6
                ? "Jun"
                : mouthData === 7
                  ? "Jul"
                  : mouthData === 8
                    ? "Ago"
                    : mouthData === 9
                      ? "Set"
                      : mouthData === 10
                        ? "Out"
                        : mouthData === 11
                          ? "Nov"
                          : "Dez";
  date =
    yearCompare > 0
      ? dayData + " " + mouthCompare + ", " + yearData
      : dayData + " " + mouthCompare;

  return date;
}

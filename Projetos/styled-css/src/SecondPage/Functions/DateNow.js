export function dateNow() {
  const dateNow = new Date().getDate();
  const mouthNow = new Date().getMonth() + 1;
  const yearNow = new Date().getFullYear();

  //Variaveis de Comparações
  let mouthCompare =
    mouthNow === 1
      ? "January"
      : mouthNow === 2
        ? "February"
        : mouthNow === 3
          ? "March"
          : mouthNow === 4
            ? "April"
            : mouthNow === 5
              ? "May"
              : mouthNow === 6
                ? "June"
                : mouthNow === 7
                  ? "July"
                  : mouthNow === 8
                    ? "August"
                    : mouthNow === 9
                      ? "September"
                      : mouthNow === 10
                        ? "October"
                        : mouthNow === 11
                          ? "November"
                          : "December";

  return mouthCompare  + " " + dateNow + ", " + yearNow;
}

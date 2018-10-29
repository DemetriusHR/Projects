export function saveCompare(saves, profileOn) {
  return saves.filter(save => {
    return save === profileOn;
  });
}

export function saveDefine(saves) {
  saves = saves.length;
  return saves > 999
    ? saves > 999999
      ? parseInt(saves / 1000000, 10) + "m"
      : parseInt(saves / 1000, 10) + "k"
    : saves;
}

export function saveContador(data, profileOn) {
  let cont = 0;

  for (let i = 0; i < data.length; i++) {
    let returnOfSearch = data[i].save.filter(saves => {
      return saves === profileOn;
    });

    cont = returnOfSearch.length !== 0 ? cont + 1 : cont;
  }

  return cont;
}

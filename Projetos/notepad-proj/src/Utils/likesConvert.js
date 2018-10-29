export function likeCompare(likes, profileOn) {
  return likes.filter(like => {
    return like === profileOn;
  });
}

export function likeDefine(likes) {
  likes = likes.length;
  return likes > 999
    ? likes > 999999
      ? parseInt(likes / 1000000, 10) + "m"
      : parseInt(likes / 1000, 10) + "k"
    : likes;
}

export function likesContador(data, profileOn) {
  let cont = 0;

  for (let i = 0; i < data.length; i++) {
    let returnOfSearch = data[i].likes.filter(like => {
      return like === profileOn;
    });

    cont = returnOfSearch.length !== 0 ? cont + 1 : cont;
  }

  return cont;
}

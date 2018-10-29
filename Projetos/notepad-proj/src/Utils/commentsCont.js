export function commentsCont(data, profileOn) {
  let returnOfSearch = data.filter(comment => {
    return comment.idProfile === profileOn;
  });
  return returnOfSearch.length;
}

export function responseCont(data, profileOn) {
  let returnOfSearch = data.filter(comment => {
    return comment.idProfileResponse === profileOn;
  });
  return returnOfSearch.length;
}
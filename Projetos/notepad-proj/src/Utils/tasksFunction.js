export function TasksCreate(data, profileOn) {
  let returnOfSearch = data.filter(item => {
    return item.profileCreate === profileOn;
  });
  return returnOfSearch.length;
}

export function TasksComplete(data, profileOn) {
  let returnOfSearch = data.filter(item => {
    return item.doComplete === true && item.profileComplete === profileOn;
  });
  return returnOfSearch.length;
}
  
export function ascending(data) {
  let tempData = [...data];
  tempData = tempData.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
  });
  return tempData;
}

export function decending(data) {
  let tempData = [...data];
  tempData = tempData.sort(function (a, b) {
    var c = new Date(a.createdDate);
    var d = new Date(b.createdDate);
    return d - c;
  });
  return tempData;
}

export function deleteItemFromState(data, title) {
  let tempData = data.filter((item) => item.title !== title);
  return tempData;
}

export function addItemToData() {}

export function editItemToData(data, title, values) {
  let keyOfValue = data.findIndex((item) => item.title === title);
  let tempData = data;
  for (let i = 0; i < values.length; i++) {
    tempData[keyOfValue][i] = values[i];
  }
  return tempData;
}

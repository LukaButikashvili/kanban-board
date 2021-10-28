export const searchItem = (data, searchedValue) => {
  let searchedValueLength = searchedValue.length;

  let searchedData = data.filter((item) => {
    let splitString = item.title.slice(0, searchedValueLength);
    return splitString === searchedValue;
  });

  return searchedData;
};

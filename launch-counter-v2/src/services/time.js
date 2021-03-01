// export const formatDate = (str) => {
//   const year = str.slice(0, 4);
//   const day = str.slice(5, 7);
//   const month = str.slice(8, 10);
//   return `${month} / ${day} / ${year}`;
// };

// export const formatTime = (str) => {
//   const time = str.concat("UTC");
//   console.log(time);
// };

export const processDateTime = (str) => {
  var date = new Date(str);
  return date.toLocaleString();
};

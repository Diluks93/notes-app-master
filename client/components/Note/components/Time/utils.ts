export const formatDateToView = (time: Date) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const rightMonth = month < 10 ? `0${month}` : month;
  const day = time.getDate();

  return `${year}.${rightMonth}.${day}`;
};

export const getLocalFromUtc = (utc: string) => {
  const localDate = new Date(utc.toLocaleString());

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

 return localDate.toLocaleDateString(undefined, options);
}

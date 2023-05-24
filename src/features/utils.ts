/**
 * The function formats date to 'dd.mm.yyyy' or 'no date'.
 * @param date Date.
 */
export function formatDate(date: Date | null | undefined): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  if (date === null || date === undefined) {
    return 'No date';
  }
  return date.toLocaleString('ru', options);

}

export const formatTime = (seconds: number) => {
  if (isNaN(seconds)) {
    return '00:00';
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString()
    .padStart(2, '0');

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

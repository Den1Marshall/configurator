export const detentToPx = (detent: number) => {
  if (typeof window === 'undefined') {
    return 0;
  }

  return (window.innerHeight / 100) * detent;
};

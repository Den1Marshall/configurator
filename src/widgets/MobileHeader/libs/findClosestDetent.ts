export const findClosestDetent = (detents: number[], value: number): number => {
  let closestNumber: number = detents[0];

  detents.forEach((detent) => {
    if (Math.abs(detent - value) < Math.abs(closestNumber - value)) {
      closestNumber = detent;
    }
  });

  return closestNumber;
};

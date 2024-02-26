export const findClosestDetent = (detents: number[], value: number): number =>
  detents.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );

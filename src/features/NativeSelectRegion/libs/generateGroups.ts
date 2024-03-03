import { licensePlateRegionsArr } from '@/entities/LicensePlate';

export const generateGroups = (): string[] => {
  const groups: string[] = [];

  for (let i = 0; i < licensePlateRegionsArr.length; i++) {
    const region = licensePlateRegionsArr[i];

    if (!groups.includes(region.title)) {
      groups.push(region.title);
    }
  }

  return groups;
};

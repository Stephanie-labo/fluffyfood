import { BreedInfoInterface } from "../types/breed-info.interface";
import { DropdownInterface } from "../types/dropdown.interface";

export const CatBreedName = {
  KAT: "Huiskat",
  COON: "Maine Coon",
  BRITS: "Britse Korthaar",
  SPHYNX: "Sphynx",
  RAGDOLL: "Ragdoll",
  BENGAAL: "Bengaal",
  BOSKAT: "Noorse Boskat",
  SIAMEES: "Siamees",
  PERS: "Pers",
  EXOTIC: "Exotic",
  HEILIG: "Heilige Burmaan",
  DEVON: "Devon Rex",
  BURMEES: "Burmees",
  SOKOKE: "Sokoke",
} as const;
export type CatBreedKey = keyof typeof CatBreedName;
export type CatBreedLabel = (typeof CatBreedName)[CatBreedKey];

export const CatBreed: DropdownInterface[] = [
  { label: CatBreedName.KAT, value: 1.2 },
  { label: CatBreedName.COON, value: 1.3 },
  { label: CatBreedName.BRITS, value: 1.2 },
  { label: CatBreedName.SPHYNX, value: 1.4 },
  { label: CatBreedName.RAGDOLL, value: 1.2 },
  { label: CatBreedName.BENGAAL, value: 1.4 },
  { label: CatBreedName.BOSKAT, value: 1.3 },
  { label: CatBreedName.SIAMEES, value: 1.4 },
  { label: CatBreedName.PERS, value: 1.2 },
  { label: CatBreedName.EXOTIC, value: 1.2 },
  { label: CatBreedName.HEILIG, value: 1.2 },
  { label: CatBreedName.DEVON, value: 1.4 },
  { label: CatBreedName.BURMEES, value: 1.3 },
  { label: CatBreedName.SOKOKE, value: 1.4 },
];

export const BreedInfo: Array<BreedInfoInterface> = [
  {
    displayName: CatBreedName.KAT,
    value: 1.2,
    maxWeightKg: {
      male: 5.5,
      female: 4.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.1 },
        { ageWeeks: 12, expectedWeightKg: 1.7 },
        { ageWeeks: 24, expectedWeightKg: 3.4 },
        { ageWeeks: 36, expectedWeightKg: 4.5 },
        { ageWeeks: 52, expectedWeightKg: 5.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 36, expectedWeightKg: 4.0 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
    },
  },

  {
    displayName: CatBreedName.COON,
    value: 1.3,
    maxWeightKg: {
      male: 11.0,
      female: 8.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.6 },
        { ageWeeks: 12, expectedWeightKg: 2.5 },
        { ageWeeks: 24, expectedWeightKg: 5.0 },
        { ageWeeks: 52, expectedWeightKg: 8.5 },
        { ageWeeks: 156, expectedWeightKg: 11.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.4 },
        { ageWeeks: 12, expectedWeightKg: 2.1 },
        { ageWeeks: 24, expectedWeightKg: 4.2 },
        { ageWeeks: 52, expectedWeightKg: 7.0 },
        { ageWeeks: 156, expectedWeightKg: 8.0 },
      ],
    },
  },

  {
    displayName: CatBreedName.BRITS,
    value: 1.2,
    maxWeightKg: {
      male: 7.0,
      female: 5.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.3 },
        { ageWeeks: 12, expectedWeightKg: 2.0 },
        { ageWeeks: 24, expectedWeightKg: 4.0 },
        { ageWeeks: 52, expectedWeightKg: 6.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.1 },
        { ageWeeks: 12, expectedWeightKg: 1.7 },
        { ageWeeks: 24, expectedWeightKg: 3.5 },
        { ageWeeks: 52, expectedWeightKg: 5.0 },
      ],
    },
  },

  {
    displayName: CatBreedName.SPHYNX,
    value: 1.4,
    maxWeightKg: {
      male: 6.0,
      female: 4.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.2 },
        { ageWeeks: 12, expectedWeightKg: 1.8 },
        { ageWeeks: 24, expectedWeightKg: 3.5 },
        { ageWeeks: 52, expectedWeightKg: 6.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
    },
  },

  {
    displayName: CatBreedName.RAGDOLL,
    value: 1.2,
    maxWeightKg: {
      male: 9.0,
      female: 6.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.5 },
        { ageWeeks: 12, expectedWeightKg: 2.2 },
        { ageWeeks: 24, expectedWeightKg: 4.5 },
        { ageWeeks: 52, expectedWeightKg: 7.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.3 },
        { ageWeeks: 12, expectedWeightKg: 1.9 },
        { ageWeeks: 24, expectedWeightKg: 3.8 },
        { ageWeeks: 52, expectedWeightKg: 6.0 },
      ],
    },
  },
  {
    displayName: CatBreedName.BENGAAL,
    value: 1.4,
    maxWeightKg: {
      male: 6.5,
      female: 5.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.3 },
        { ageWeeks: 12, expectedWeightKg: 2.0 },
        { ageWeeks: 24, expectedWeightKg: 4.0 },
        { ageWeeks: 52, expectedWeightKg: 6.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.1 },
        { ageWeeks: 12, expectedWeightKg: 1.7 },
        { ageWeeks: 24, expectedWeightKg: 3.2 },
        { ageWeeks: 52, expectedWeightKg: 5.0 },
      ],
    },
  },

  {
    displayName: CatBreedName.BOSKAT,
    value: 1.3,
    maxWeightKg: {
      male: 9.0,
      female: 7.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.5 },
        { ageWeeks: 12, expectedWeightKg: 2.3 },
        { ageWeeks: 24, expectedWeightKg: 4.5 },
        { ageWeeks: 52, expectedWeightKg: 7.0 },
        { ageWeeks: 104, expectedWeightKg: 9.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.3 },
        { ageWeeks: 12, expectedWeightKg: 2.0 },
        { ageWeeks: 24, expectedWeightKg: 4.0 },
        { ageWeeks: 52, expectedWeightKg: 6.0 },
        { ageWeeks: 104, expectedWeightKg: 7.0 },
      ],
    },
  },

  {
    displayName: CatBreedName.SIAMEES,
    value: 1.4,
    maxWeightKg: {
      male: 5.0,
      female: 4.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.6 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 0.9 },
        { ageWeeks: 12, expectedWeightKg: 1.4 },
        { ageWeeks: 24, expectedWeightKg: 2.5 },
        { ageWeeks: 52, expectedWeightKg: 4.0 },
      ],
    },
  },

  {
    displayName: CatBreedName.PERS,
    value: 1.2,
    maxWeightKg: {
      male: 5.5,
      female: 4.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.1 },
        { ageWeeks: 12, expectedWeightKg: 1.7 },
        { ageWeeks: 24, expectedWeightKg: 3.2 },
        { ageWeeks: 52, expectedWeightKg: 5.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 2.8 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
    },
  },

  {
    displayName: CatBreedName.EXOTIC,
    value: 1.2,
    maxWeightKg: {
      male: 6.0,
      female: 5.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.2 },
        { ageWeeks: 12, expectedWeightKg: 1.9 },
        { ageWeeks: 24, expectedWeightKg: 3.5 },
        { ageWeeks: 52, expectedWeightKg: 5.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.6 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
    },
  },

  {
    displayName: CatBreedName.HEILIG,
    value: 1.2,
    maxWeightKg: {
      male: 6.5,
      female: 5.0,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.2 },
        { ageWeeks: 12, expectedWeightKg: 1.8 },
        { ageWeeks: 24, expectedWeightKg: 3.6 },
        { ageWeeks: 52, expectedWeightKg: 5.5 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.6 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 52, expectedWeightKg: 4.5 },
      ],
    },
  },
  {
    displayName: CatBreedName.DEVON,
    value: 1.4,
    maxWeightKg: {
      male: 4.5,
      female: 3.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 2.8 },
        { ageWeeks: 52, expectedWeightKg: 4.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 0.9 },
        { ageWeeks: 12, expectedWeightKg: 1.3 },
        { ageWeeks: 24, expectedWeightKg: 2.4 },
        { ageWeeks: 52, expectedWeightKg: 3.5 },
      ],
    },
  },

  {
    displayName: CatBreedName.BURMEES,
    value: 1.3,
    maxWeightKg: {
      male: 5.5,
      female: 4.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.1 },
        { ageWeeks: 12, expectedWeightKg: 1.7 },
        { ageWeeks: 24, expectedWeightKg: 3.4 },
        { ageWeeks: 52, expectedWeightKg: 5.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 3.0 },
        { ageWeeks: 52, expectedWeightKg: 4.2 },
      ],
    },
  },

  {
    displayName: CatBreedName.SOKOKE,
    value: 1.4,
    maxWeightKg: {
      male: 4.5,
      female: 3.5,
    },
    growthCurve: {
      male: [
        { ageWeeks: 8, expectedWeightKg: 1.0 },
        { ageWeeks: 12, expectedWeightKg: 1.5 },
        { ageWeeks: 24, expectedWeightKg: 2.8 },
        { ageWeeks: 52, expectedWeightKg: 4.0 },
      ],
      female: [
        { ageWeeks: 8, expectedWeightKg: 0.9 },
        { ageWeeks: 12, expectedWeightKg: 1.3 },
        { ageWeeks: 24, expectedWeightKg: 2.4 },
        { ageWeeks: 52, expectedWeightKg: 3.5 },
      ],
    },
  },
];

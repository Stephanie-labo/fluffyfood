export interface BreedInfoInterface {
  displayName: string;
  maxWeightKg: maxWeightInterface;
  growthCurve: growthCurvesInterface;
  value: number;
}
export interface maxWeightInterface {
  male: number;
  female: number;
}
export interface growthCurvesInterface {
  male: growthCurveInterface[];
  female: growthCurveInterface[];
}
export interface growthCurveInterface {
  ageWeeks: number;
  expectedWeightKg: number;
}

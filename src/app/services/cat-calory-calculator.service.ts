import { Injectable } from "@angular/core";
import { CatCalorieFactorInterface } from "../types/cat-calorie-factor.interface";
import { BreedInfo } from "../constants/cat-breed-factor.const";
import { DailyCaloriesInterface } from "../types/daily-calories.interface";

@Injectable({
  providedIn: "root",
})
export class CatCalorieCalculatorService {
  calculateCalories(data: CatCalorieFactorInterface): DailyCalories {
    const breedData = BreedInfo.find(
      (breedData) => breedData.displayName === data.breed
    );

    const maxBreedWeight =
      breedData?.maxWeightKg[data.female ? "female" : "male"] ?? data.weight;

    const isOverweight = data.weight > maxBreedWeight;
    const dailyCalories: DailyCaloriesInterface = {
      current: 0,
    };

    const factor = Math.max(
      breedData!.value + data.activity + data.status,
      1.0
    );

    const rer = 70 * Math.pow(data.weight, 0.75);
    dailyCalories.current = Math.round(rer * factor);
    if (isOverweight) {
      const idealWeight = isOverweight ? maxBreedWeight : data.weight;
      dailyCalories.weight = idealWeight;
      const rer = 70 * Math.pow(idealWeight, 0.75);
      dailyCalories.ideal = Math.round(rer * 0.8);
    }
    return dailyCalories;
  }
}

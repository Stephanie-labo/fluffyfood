import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CatCalorieCalculatorService {
  /**
   * Bereken dagelijkse calorie behoefte van een kat
   * @param weight gewicht in kg
   * @param breedFactor factor van het ras (bv. 1.1 voor Maine Coon)
   * @param activityFactor factor van activiteit
   * @param statusFactor factor van sterilisatie status
   */
  calculateCalories(
    weight: number,
    breedFactor: number,
    activityFactor: number,
    statusFactor: number
  ): number {
    if (weight <= 0) return 0;
    const factor = Math.max(breedFactor + activityFactor + statusFactor, 1.0);
    const rer = 70 * Math.pow(weight, 0.75);
    const dailyCalories = Math.round(rer * factor);
    return dailyCalories;
  }
}

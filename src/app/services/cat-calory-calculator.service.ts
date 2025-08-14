import { Injectable } from "@angular/core";
import { CatCalorieFactorInterface } from "../types/cat-calorie-factor.interface";

@Injectable({
  providedIn: "root",
})
export class CatCalorieCalculatorService {
  calculateCalories(data: CatCalorieFactorInterface): number {
    if (data.weight <= 0) return 0;
    const factor = Math.max(data.breed + data.activity + data.status, 1.0);
    const rer = 70 * Math.pow(data.weight, 0.75);
    const dailyCalories = Math.round(rer * factor);
    return dailyCalories;
  }
}

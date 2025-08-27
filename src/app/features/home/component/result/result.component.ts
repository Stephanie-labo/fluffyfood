import { Component, Input, OnInit } from "@angular/core";
import { CatCalorieCalculatorService } from "../../../../services/cat-calory-calculator.service";
import { CatCalorieFactorInterface } from "../../../../types/cat-calorie-factor.interface";
import { DailyCaloriesInterface } from "../../../../types/daily-calories.interface";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
})
export class ResultComponent implements OnInit {
  @Input() result!: CatCalorieFactorInterface;
  dailyCalories?: DailyCaloriesInterface;

  constructor(private calculator: CatCalorieCalculatorService) {}
  ngOnInit(): void {
    this.dailyCalories = this.calculator.calculateCalories(this.result);
  }
}

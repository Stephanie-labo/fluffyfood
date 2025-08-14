import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { CatActivityLevels } from "../../constants/cat-activity-level.const";
import { CatBreed } from "../../constants/cat-breed-factor.const";
import { CatStatus } from "../../constants/cat-status.cont";
import { DropdownInterface } from "../../types/dropdown.interface";
import { CatCalorieCalculatorService } from "../../services/cat-calory-calculator.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  activityLevel: DropdownInterface[] = [];
  breeds: DropdownInterface[] = [];
  catstatus: DropdownInterface[] = [];
  form: FormGroup;
  dailyCalories: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private catService: CatCalorieCalculatorService
  ) {
    this.form = this.formBuilder.group({
      breed: new FormControl(0, [Validators.required]),
      activity: new FormControl(0, [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      weight: new FormControl(0, [Validators.required, Validators.min(0.1)]),
    });
  }
  ngOnInit(): void {
    this.activityLevel = CatActivityLevels;
    this.breeds = CatBreed;
    this.catstatus = CatStatus;
  }

  onSubmit() {
    if (this.form.valid) {
      const { weight, breed, activity, status } = this.form.value;
      this.dailyCalories = this.catService.calculateCalories(
        weight,
        breed,
        activity,
        status
      );
    }
    console.log(this.form.value);
  }
}

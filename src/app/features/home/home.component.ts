import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CatActivityLevels } from "../../constants/cat-activity-level.const";
import { CatBreed } from "../../constants/cat-breed-factor.const";
import { CatStatus } from "../../constants/cat-status.cont";
import { DropdownInterface } from "../../types/dropdown.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  activityLevel: DropdownInterface[] = CatActivityLevels;
  breeds: DropdownInterface[] = CatBreed;
  catstatus: DropdownInterface[] = CatStatus;

  form = new FormGroup({
    breed: new FormControl(0, [Validators.required]),
    activity: new FormControl(0, [Validators.required]),
    status: new FormControl(0, [Validators.required]),
    weight: new FormControl(0, [Validators.required]),
  });

  onSubmit() {
    // this.recalculate();
    console.log(this.form.value);
  }
  // recalculate() {
  //   if (!this.form.weight || !this.form.breed) return;

  //   const factor = Math.max(
  //     this.form.breed + this.form.activity + this.form.status,
  //     1.0
  //   );
  //   const rer = 70 * Math.pow(this.form.weight, 0.75);
  //   const dailyCalories = Math.round(rer * factor);

  //   console.log("Dagelijkse energiebehoefte:", dailyCalories, "kcal");
  // }
}

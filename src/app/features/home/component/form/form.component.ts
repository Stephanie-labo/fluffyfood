import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { CatActivityLevels } from "../../../../constants/cat-activity-level.const";
import { CatBreed } from "../../../../constants/cat-breed-factor.const";
import { CatStatus } from "../../../../constants/cat-status.cont";
import { DropdownInterface } from "../../../../types/dropdown.interface";

@Component({
  selector: "app-catform",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  activityLevel: DropdownInterface[] = [];
  breeds: DropdownInterface[] = [];
  catstatus: DropdownInterface[] = [];
  form: FormGroup;
  @Output() formData = new EventEmitter<Object>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      breed: new FormControl(0, [Validators.required]),
      female: new FormControl(Boolean(false), [Validators.required]),
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
      this.formData.emit(this.form.value);
    }
  }
}

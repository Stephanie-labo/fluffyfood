import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
} from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  Form,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { DropdownInterface } from "../../types/dropdown.interface";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() label?: string;
  @Input() control!: string;
  @Input() type: string = "text";
  error: string = "Uw kat moet zwaarder zijn dan 0.1kg";

  constructor(
    @Optional() @SkipSelf() private controlContainer: ControlContainer
  ) {}
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
  get formControl(): AbstractControl | null {
    return this.formGroup.get(this.control);
  }

  controlHasError(): boolean {
    return !!(
      this.formControl &&
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched)
    );
  }
}

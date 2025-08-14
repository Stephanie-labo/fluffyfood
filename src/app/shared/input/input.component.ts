import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
} from "@angular/core";
import { ControlContainer, Form, FormControl, FormGroup } from "@angular/forms";
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

  constructor(
    @Optional() @SkipSelf() private controlContainer: ControlContainer
  ) {}
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
}

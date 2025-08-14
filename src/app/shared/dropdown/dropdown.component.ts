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
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  @Input() label?: string;
  @Input() control!: string;
  @Input() data!: DropdownInterface[];

  selectedItem!: any;
  constructor(
    @Optional() @SkipSelf() private controlContainer: ControlContainer
  ) {}
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
  optionLabel(item: DropdownInterface): string {
    return item.description
      ? `${item.label} - ${item.description}`
      : `${item.label}`;
  }
}

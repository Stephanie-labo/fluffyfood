import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form, FormControl, FormGroup } from "@angular/forms";
import { DropdownInterface } from "../../types/dropdown.interface";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  @Input() label?: string;
  @Input() form!: FormGroup;
  @Input() control!: string;
  @Input() data!: DropdownInterface[];

  selectedItem!: any;

  optionLabel(item: DropdownInterface): string {
    return item.description
      ? `${item.label} - ${item.description}`
      : `${item.label}`;
  }
}

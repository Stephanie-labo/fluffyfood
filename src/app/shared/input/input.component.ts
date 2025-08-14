import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form, FormControl, FormGroup } from "@angular/forms";
import { DropdownInterface } from "../../types/dropdown.interface";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() label?: string;
  @Input() form!: FormGroup;
  @Input() control!: string;
  @Input() type: string = "text";
}

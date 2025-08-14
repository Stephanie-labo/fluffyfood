import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form, FormControl } from "@angular/forms";
import { DropdownInterface } from "../../types/dropdown.interface";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() controlName!: string;
  @Input() type: string = "text";
}

import { NgModule } from "@angular/core";
import { DialogComponent } from "../shared/dialog/dialog.component";
import { CommonModule } from "@angular/common";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { InputComponent } from "./input/input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DialogComponent, DropdownComponent, InputComponent],
  exports: [DialogComponent, DropdownComponent, InputComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class SharedModule {}

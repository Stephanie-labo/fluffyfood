import { NgModule } from '@angular/core';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [DialogComponent, DropdownComponent,InputComponent],
  exports: [DialogComponent,DropdownComponent,InputComponent],
  imports: [CommonModule],
})
export class SharedModule {}

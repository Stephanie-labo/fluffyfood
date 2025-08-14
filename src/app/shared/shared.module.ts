import { NgModule } from '@angular/core';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent ],
  imports: [CommonModule],
})
export class SharedModule {}

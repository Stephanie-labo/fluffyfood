import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
})
export class FeaturesModule {}

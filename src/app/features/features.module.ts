import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [ ReactiveFormsModule,CommonModule,SharedModule],
})
export class FeaturesModule {}

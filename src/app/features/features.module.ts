import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormComponent } from "./home/component/form/form.component";
import { ResultComponent } from "./home/component/result/result.component";

@NgModule({
  declarations: [HomeComponent, FormComponent, ResultComponent],
  exports: [HomeComponent, FormComponent, ResultComponent],
  imports: [ReactiveFormsModule, CommonModule, SharedModule],
})
export class FeaturesModule {}

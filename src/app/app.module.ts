import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { FeaturesModule } from "./features/features.module";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    FeaturesModule,
  ],

  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

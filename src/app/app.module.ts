import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FeaturesModule } from "./features/features.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FeaturesModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

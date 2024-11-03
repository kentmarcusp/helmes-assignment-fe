import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app.routes";
import { DefaultDisplayModule } from "../components/default-display/default-display.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    DefaultDisplayModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: []
})
export class AppModule { }

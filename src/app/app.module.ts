import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CommonService } from "./common.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HighchartsChartModule } from "highcharts-angular";
import { DBDataService } from './dashboard/dbdata.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HighchartsChartModule],
  declarations: [AppComponent, HeaderComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [CommonService, DBDataService]
})
export class AppModule {}

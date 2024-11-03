import { NgModule } from "@angular/core";
import { SectorService } from "../../services/sectorService";
import { SectorDisplayViewComponent } from "./sector-display-view.component";
import { provideHttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SectorFormComponent } from "../sector-form/sector-form.component";

@NgModule({
    declarations: [
        SectorDisplayViewComponent
    ],
    providers: [
        SectorService,
        provideHttpClient()
    ],
    exports: [
        SectorDisplayViewComponent
    ],
    imports: [
    CommonModule,
    SectorFormComponent
]
})
export class SectorDisplayViewModule { }

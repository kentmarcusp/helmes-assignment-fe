import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectorFormComponent } from "../sector-form/sector-form.component";
import { UserSectorDataViewComponent } from "./user-sector-data-view.component";

@NgModule({
    declarations: [
        UserSectorDataViewComponent
    ],
    providers: [
    ],
    exports: [
        UserSectorDataViewComponent
    ],
    imports: [
        CommonModule,
        SectorFormComponent
    ]
})
export class UserSectorDataViewModule { }

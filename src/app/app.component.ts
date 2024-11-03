import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/helpers/navbar/navbar.component";
import { SectorFormComponent } from '../components/sector-form/sector-form.component';
import { SectorDisplayViewModule } from '../components/sector-display-view/sector-display-view.module';
import { UserSectorDataViewModule } from '../components/user-sector-data-view/user-sector-data-view.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, NavbarComponent, SectorDisplayViewModule, SectorFormComponent, UserSectorDataViewModule]
})
export class AppComponent {
  title = 'helmes-application-fe ';
}

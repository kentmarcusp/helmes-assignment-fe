import { Component } from "@angular/core";
import { AuthService } from "../../services/authService";
import { FormsModule } from "@angular/forms";
import { AlertDisplay } from '../helpers/alert';
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: 'sector-display-view',
    templateUrl: './login-view.component.html',
    imports: [FormsModule, AlertDisplay, CommonModule]
})

export class LoginViewComponent {

    constructor(private authService: AuthService,
        private router: Router
    ) {}

    username: string = "";
    displayAlert: boolean = true;

    onLogin() {
        this.authService.loginByUsername(this.username).subscribe({
            next: (appAccount) => {
                this.displayAlert = true;
                localStorage.setItem('appAccountId', appAccount.appAccountId.toString());
                this.router.navigate(['/settings']).then(() => {
                    window.location.reload();
                  });
            },
            error: () => {
                this.displayAlert = false;
            }
        });
    }
}


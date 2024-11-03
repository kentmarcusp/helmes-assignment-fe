import { Component } from '@angular/core';

@Component({
    selector: 'alert-display',
    standalone: true,
    template: `<div class="alert alert-danger" role="alert">
        <ng-content></ng-content>
    </div>`
})

export class AlertDisplay { }
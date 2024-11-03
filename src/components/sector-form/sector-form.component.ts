import { Component, Input, OnInit } from '@angular/core';
import { Sector } from '../../interface/ISector';
import { SectorService } from '../../services/sectorService';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectorFormData } from '../../interface/ISectorFormData';
import { ValidatorService } from '../../services/validatorService';
import { AlertDisplay } from '../helpers/alert';
import { Router } from '@angular/router';
import { AppAccountService } from '../../services/appAccountService';
import { MatChipsModule } from '@angular/material/chips';


@Component({
    selector: 'sector-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AlertDisplay, MatChipsModule],
    templateUrl: './sector-form.component.html',
    styleUrl: './sector-form.component.css',
})

export class SectorFormComponent implements OnInit {

    sectorForm!: FormGroup;

    @Input()
    sectorData: Sector[] = [];

    hasAgreed: boolean = false;
    userName: string = '';
    agreedDate: string = '';
    sectors: any = [];
    displayAlert: boolean = true;
    selectedSectorIds: any = [];


    constructor(private formBuilder: FormBuilder,
        private sectorService: SectorService,
        private validatorService: ValidatorService,
        private appAccountService: AppAccountService,
        private router: Router) {
        this.sectorForm = this.formBuilder.group({
            userName: [''],
            sectors: [[]],
            hasAgreed: []
        });
    }

    ngOnInit() {
        this.getPreselectedData();
    }

    getPreselectedData(): void {
        this.appAccountService.fetchPreselectedData().subscribe({
            next: (data: any) => {
                this.selectedSectorIds = data.selectedSectorIds;
                this.userName = data.userName;
                this.hasAgreed = data.hasAgreed;

                this.sectorForm.patchValue({
                    userName: this.userName,
                    sectors: this.selectedSectorIds,
                    hasAgreed: this.hasAgreed
                });
            },
            error: () => console.error('Failed to fetch display data.')
        });
    }

    onSubmitSaveData(): any {
        const formData: SectorFormData = this.sectorForm.value;
        const validatedData = this.validatorService.fetchValidationResult(formData);
        if (!(validatedData)) {
            window.scrollTo(0, 0);
            return this.displayAlert = false;
        }

        this.displayAlert = true;
        this.sectorService.saveFormDataInput(formData).subscribe({
            next: () => {
                this.router.navigate(['/settings']);
            },
            error: (err) => {
                console.error('Error updating sectors', err);
            }
        });

    }

    setHasAgreedToTerms() {
        this.hasAgreed = !this.hasAgreed;
    }

    isSelectedSector(sectorId: number): boolean {
        if (this.selectedSectorIds) {
            return this.selectedSectorIds.some((id: number) => sectorId === id);
        }
        return false;
    }

}

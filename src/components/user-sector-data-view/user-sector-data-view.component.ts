import { Component, OnInit } from "@angular/core";
import { AppAccountService } from "../../services/appAccountService";
import { HttpClient } from "@angular/common/http";
import { SectorService } from "../../services/sectorService";
import { Sector } from "../../interface/ISector";

@Component({
    selector: 'user-sector-data-view',
    templateUrl: './user-sector-data-view.component.html',
})
export class UserSectorDataViewComponent implements OnInit {

    constructor(
        private appAccountService: AppAccountService,
        private sectorService: SectorService,
    ) { }

    appAccountName: any
    mappedSectors: Sector[] = [];
    accordionStates: boolean[] = [];

    ngOnInit(): void {
        this.getDisplayData();
        this.accordionStates = new Array(this.mappedSectors.length).fill(false);
    }

    getDisplayData(): void {
        this.appAccountService.fetchAppAccountDisplayData().subscribe({
            next: (data) => {
                this.appAccountName = data.appAccountName;
                this.mappedSectors = this.mapSectorIndentValues(data.sectors);
            },
            error: () => console.error('Failed to fetch display data.'),
        });
    }

    mapSectorIndentValues(sectors: any) {
        return this.sectorService.mapFrontEndIndentValues(sectors);
    }

    toggleAccordion(accordionIndex: number) {
        this.accordionStates[accordionIndex] = !this.accordionStates[accordionIndex];
    }

    // Validates whether a sector is a child sector of the current main sector through id and descendant comparison
    isChildOfPreviousMainSector(sector: Sector, mainSector: Sector): boolean {
        return sector.parentSectorId === mainSector.sectorId ||
            this.isDescendant(sector, mainSector.sectorId);
    }

    // Validates whether the current sector is a descendant of another sector through parent id value comparisons between the sectors
    // This is necessary for deeper level comparisons between sectors
    isDescendant(sector: Sector, parentId: number): boolean {
        let currentSector: any = sector;
        while (currentSector.parentSectorId) {
            if (currentSector.parentSectorId === parentId) {
                return true;
            }
            currentSector = this.mappedSectors.find(s => s.sectorId === currentSector.parentSectorId);
            if (!currentSector) {
                break;
            }
        }
        return false;
    }

}
import { Component, OnInit, Output } from "@angular/core";
import { SectorService } from "../../services/sectorService";
import { Sector } from "../../interface/ISector";

@Component({
    selector: 'sector-display-view',
    templateUrl: './sector-display-view.component.html',
})

export class SectorDisplayViewComponent implements OnInit {

    constructor(private sectorService: SectorService) { }

    @Output()
    sectorData: Sector[] = [];

    ngOnInit(): void {
        this.getAllSectors();
    }

    getAllSectors(): void {
        this.sectorService.getAllSectorDisplayData().subscribe({
            next: data => {
                this.sectorData = data;
            },
            error: error => {
                console.error('Could not fetch any sector data!', error);
            }
        });
    }
}
import { Observable, map } from "rxjs";
import { Sector } from "../interface/ISector";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ValidatorService } from "./validatorService";
import { SectorFormData } from "../interface/ISectorFormData";
import { AppAccount } from "../interface/IAppAccount";
import { AppAccountService } from "./appAccountService";

@Injectable({
    providedIn: 'root',
})

export class SectorService {
    private api = 'http://localhost:8080/sectors';

    constructor(private http: HttpClient,
        private validatorService: ValidatorService,
        private appAccountService: AppAccountService) { }

    getSectorFormDataValue(formdata: SectorFormData): boolean {
        return this.validatorService.fetchValidationResult(formdata);
    }

    saveFormDataInput(formdata: SectorFormData) {
        return this.appAccountService.saveAppAccountFormData(formdata);
    }


    getAllSectorDisplayData(): Observable<Sector[]> {
        return this.http.get<Sector[]>(this.api).pipe(
            map(sectors => this.mapFrontEndIndentValues(sectors))
        );
    }

    // Here we recursively map indent values for each sector and their childSectors for display purposes
    mapFrontEndIndentValues(sectors: Sector[]): Sector[] {
        const mappedSectors: Sector[] = [];

        function processSector(sector: Sector, indentLevel: number) {
            mappedSectors.push({
                ...sector,
                indent: indentLevel,
                containsSubCategories: sector.childSectors && sector.childSectors.length > 0
            });

            if (sector.childSectors && sector.childSectors.length > 0) {
                sector.childSectors.forEach(childSector =>
                    processSector(childSector, indentLevel + 1));
            }
        }

        sectors.forEach(rootSector => processSector(rootSector, 0));


        return mappedSectors;
    }
}
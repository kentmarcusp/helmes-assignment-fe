import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppAccount } from "../interface/IAppAccount";
import { Observable } from "rxjs";
import { Sector } from "../interface/ISector";
import { SectorFormData } from "../interface/ISectorFormData";

@Injectable({
    providedIn: 'root',
})

export class AppAccountService {
    private api = 'http://localhost:8080/appAccount';

    constructor(private http: HttpClient) {}

    localStorageId: any = localStorage.getItem("appAccountId");

    saveAppAccountFormData(formdata: SectorFormData) {
        const formattedRequestData = {
            appAccountId: this.localStorageId,
            userName: formdata.userName,
            sectors: formdata.sectors,
            hasAgreed: formdata.hasAgreed
        }

        return this.http.put<Sector>(`${this.api}/${this.localStorageId}/sectors`, formattedRequestData);
    }

    fetchAppAccountDisplayData(): Observable<AppAccount> {
        return this.http.get<AppAccount>(`${this.api}/${this.localStorageId}`);
    }

    fetchPreselectedData(): Observable<AppAccount> {
        return this.http.get<AppAccount>(`${this.api}/sectors/${this.localStorageId}`);
    }
}
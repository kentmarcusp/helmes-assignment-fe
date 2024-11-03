import { Observable } from "rxjs";
import { Sector } from "../interface/ISector";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SectorFormData } from "../interface/ISectorFormData";

@Injectable({
  providedIn: 'root',
})

export class ValidatorService {

  constructor() { }

  fetchValidationResult(formData: SectorFormData): boolean {
    return (this.validateUserNameInput(formData.userName.trim()) && formData.sectors.length > 0);
  }

  validateUserNameInput(userName: string): boolean {
    return userName != null && userName.length >= 3 && /^[a-zA-Z0-9]+$/.test(userName);
  }
}
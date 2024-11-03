import { Sector } from "./ISector";

export interface AppAccount {
    appAccountId: number,
    appAccountName: string,
    hasAgreed: boolean,
    sectors: Sector
}
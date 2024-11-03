import { SectorCategory } from "./ISectorCategory";

export interface Sector {
    sectorId: number;
    sectorName: string;
    parentSectorId: number,
    parentSector?: Sector | null;
    childSectors?: Sector[];
    indent?: number; 
    containsSubCategories: boolean | undefined;
}

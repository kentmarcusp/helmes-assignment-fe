import { Sector } from "./ISector";

export interface SectorCategory {
    sectorCategoryId: number;
    sectorCategoryName: string;
    sector: Sector;
    parentCategory?: SectorCategory;
    subCategories?: SectorCategory[]; 
  }
import { Building } from "./Building";

export interface Zone {
  id: string;
  name:
    | "Guayacan"
    | "Guaduales"
    | "Cambulos"
    | "Guamos"
    | "Platanillas"
    | "Gualanday";
  buildings: Building[]; // List of buildings in the zone
}

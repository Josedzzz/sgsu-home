import { MapPoint } from "./MapPoint";

export interface Building {
  id: string;
  name: string;
  type:
    | "Facultad"
    | "Edificio"
    | "Auditorio"
    | "Biblioteca"
    | "Vivero"
    | "Coliseo"
    | "Cancha"
    | "Parque"
    | "Centro de Salud"
    | "Instituto"
    | "Bloque Administrativo"
    | "Laboratorio";
  description: string;
  pointsOfInterest: MapPoint[]; // Specific places inside the building
}

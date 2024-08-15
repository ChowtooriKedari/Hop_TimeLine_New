export interface Book {
  title: string;
  id: number;
  decoration: string[];
  image: string;
  isAvailable: boolean;
  color: string;
  orientation: string; // new property to track the orientation
positionClass?:string
}

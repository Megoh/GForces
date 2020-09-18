export interface DrinkModel {
  name: string;
  price: number;
  onAddDrink: (price: number) => void;
}

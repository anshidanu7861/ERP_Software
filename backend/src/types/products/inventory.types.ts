export interface updateInvetoryTypes {
  product_id: string;
  quantity: number;
  transaction_type: "sale" | "purchase";
  date: Date;
}

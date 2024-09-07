import { ITransaction } from "../../db/models/Products/transaction.model";
import { updateInvetoryTypes } from "../../types/products/inventory.types";

export interface InventoryControllerType {
  updateInventory: (
    body: updateInvetoryTypes
  ) => Promise<Partial<ITransaction>>;
}

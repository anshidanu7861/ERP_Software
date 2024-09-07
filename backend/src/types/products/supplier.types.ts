export interface addSuppliersType {
  name: string;
  phone: string;
  address: string;
  email: string;
  country: string;
  state: string;
  city: string;
}

export interface updateSupplierType {
  name: string;
  phone: string;
  address: string;
  email: string;
  country: string;
  state: string;
  city: string;
  _id?: string;
}

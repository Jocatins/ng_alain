export interface IItemData {
  id: string;
  userId: number;
  date: number;
  products: ProductPayload[];
}
export interface ProductPayload {
  productId: number;
  quantity: number;
}

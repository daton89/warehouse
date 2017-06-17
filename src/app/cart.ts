import { Product } from './product';

export class Cart {

  public _id: string
  public products: Array<Product>
  public price: number
  public createdOn: Date
  public updatedOn: Date
  public checkuot: boolean
  public checkoutOn: Date

}

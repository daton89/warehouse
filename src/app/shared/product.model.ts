import { Article } from '../articles/article.model';
export class Product {
  public _id: string
  public article: Article
  public qty: number
  public updated: boolean

  constructor(
    article: Article,
    qty: number
  ) {
    this.article = article
    this.qty = qty
  }

}

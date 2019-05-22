
export class Article {
    public _id: string
    public code: string
    public name: string
    public description?: string
    public image?: string
    public tags: [{name: string}]
    public category: string
    public type: string
    public qty: number
    public company: string
    public price: number
    public nicotine?: string
    public size?: string
    constructor(
      _id?: string,
      code?: string,
      name?: string,
      description?: string,
      image?: string,
      tags?: [{name: string}],
      category?: string,
      type?: string,
      qty?: number,
      company?: string,
      price?: number,
      nicotine?: string,
      size?: string
    ) {
      this._id = _id
      this.code = code
      this.name = name
      this.category = category
      this.description = description
      this.image = image
      this.tags = tags
      this.type = type
      this.qty = qty
      this.company = company
      this.price = price
      this.nicotine = nicotine
      this.size = size
    }
}

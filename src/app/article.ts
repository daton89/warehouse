
export class Article {
    private _id: string
    constructor(
        public code: string,
        public name: string,
        public category: string,
        public type: string,
        public qty: number,
        public company: string,
        public price: number,
        public nicotine?: string,
        public size?: string
    ) {

    }
}
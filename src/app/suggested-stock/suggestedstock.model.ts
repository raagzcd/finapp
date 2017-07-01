export class SuggestedStock{
    public name:string;
    public symbol:string;
    public price:number;
    public exchange:string;

    constructor(
        name:string, symbol:string,price:number,exchange:string
    ){
        this.name = name;
        this.symbol = symbol;
        this.price = price;
        this.exchange = exchange;
    }
}
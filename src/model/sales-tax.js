export class SalesTax {
    percent;
    amount;

    static parse(obj) {
        const salesTax = new SalesTax();

        salesTax.percent = obj.percent;
        salesTax.amount = obj.amount;
        
        return salesTax;
    }
}
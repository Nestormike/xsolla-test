export class SimpleCheckout {
    amount;
    currency;

    static parse(obj) {
        const simpleCheckout = new SimpleCheckout();

        simpleCheckout.amount = obj.amount;
        simpleCheckout.currency = obj.currency;

        return simpleCheckout;
    }
}
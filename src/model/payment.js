export class Payment {
    currency;
    amount;
    amountFromPs;

    static parse(obj) {
        const payment = new Payment();

        payment.currency = obj.currency;
        payment.amount = obj.amount;
        payment.amount = obj.amount_from_ps;

        return payment;
    }
}
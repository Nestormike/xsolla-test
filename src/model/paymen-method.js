export class PaymentMethod {
    id;
    name;

    static parse(obj) {
        const paymentMethod = new PaymentMethod();

        paymentMethod.id = obj.id;
        paymentMethod.name = obj.name;
        
        return paymentMethod;
    }
}
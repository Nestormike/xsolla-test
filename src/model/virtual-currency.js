export class VirtualCurrency {
    amount;
    name;

    static parse(obj) {
        const virtualCurrency = new VirtualCurrency();

        virtualCurrency.amount = obj.amount;
        virtualCurrency.name = obj.name;
        
        return virtualCurrency;
    }
}
export class PinCodes {
    amount;
    currency;
    content;

    static parse(obj) {
        const pinCodes = new PinCodes();

        pinCodes.amount = obj.amount;
        pinCodes.currency = obj.currency;
        pinCodes.content = obj.content;
        
        return pinCodes;
    }
}
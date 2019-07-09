import { VirtualCurrency } from "./virtual-currency";
import { SimpleCheckout } from "./simple-checkout";
import { PinCodes } from "./pin-codes";
import { Subscription } from "./subscription";

export class Purchase {
    virtualCurrency;
    virtualtems;
    simpleCheckout;
    pinCodes;
    subscription;

    static parse(obj) {
        const purchase = new Purchase();

        purchase.virtualCurrency = VirtualCurrency.parse(obj.virtual_currency);
        purchase.virtualtems = obj.virtual_items;
        purchase.simpleCheckout = SimpleCheckout.parse(obj.simple_checkout);
        purchase.pinCodes = PinCodes.parse(obj.pin_codes);
        purchase.subscription = Subscription.parse(obj.subscription);

        return purchase;
    }
}
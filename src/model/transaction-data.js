import { Transaction } from "./transaction";
import { User } from "./user";
import { PaymentDetails } from "./payment-details";
import { Purchase } from "./purchase";


export class TransactonData {
    transaction;
    user;
    paymentDetails;
    purchase;

    static parse(obj) {
        const tData = new TransactonData();

        tData.transaction = Transaction.parse(obj.transaction);
        tData.user = User.parse(obj.user);
        tData.paymentDetails = PaymentDetails.parse(obj.payment_details);
        tData.purchase = Purchase.parse(obj.purchase);

        return tData;
    }
}


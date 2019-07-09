import { Payment } from "./payment";
import { SalesTax } from "./sales-tax";

export class PaymentDetails {
    payment;
    salesTax;

    static parse(obj) {
        const paymentDetails = new PaymentDetails();

        paymentDetails.payment = Payment.parse(obj.payment);
        paymentDetails.salesTax = SalesTax.parse(obj.sales_tax);

        return paymentDetails;
    }
}
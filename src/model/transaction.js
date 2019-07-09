import { Project } from "./project";
import { PaymentMethod } from "./paymen-method";

export class Transaction {
    project;
    paymentMethod;
    transferDate;
    id;
    refundReason;
    status;
    externalId;
    dryRun;
    isRefundAllowed;

    static parse(obj) {
        const transaction = new Transaction();

        transaction.project = Project.parse(obj.project);
        transaction.paymentMethod = PaymentMethod.parse(obj.payment_method);
        transaction.transferDate = obj.transfer_date;
        transaction.id = obj.id;
        transaction.refundReason = obj.refund_reason;
        transaction.status = obj.status;
        transaction.externald = obj.external_id;
        transaction.dryRun = obj.dry_run;
        transaction.isRefund_allowed = obj.is_refund_allowed;

        return transaction;
    }
}

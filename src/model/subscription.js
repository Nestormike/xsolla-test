export class Subscription {
    name;

    static parse(obj) {
        const subscription = new Subscription();

        subscription.name = obj.name;

        return subscription;
    }
}
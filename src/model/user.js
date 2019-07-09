export class User {
    id;
    name;
    email;
    phone;
    country;

    static parse(obj) {
        const user = new User();

        user.id = obj.id;
        user.name = obj.name;
        user.email = obj.email;
        user.phone = obj.phone;
        user.country = obj.country;

        return user;
    }
}
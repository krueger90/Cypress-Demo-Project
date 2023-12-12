import { faker } from '@faker-js/faker';

function createRandomUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: faker.internet.password(),
    };
}

export const USERS = faker.helpers.multiple(createRandomUser, { count: 1 });
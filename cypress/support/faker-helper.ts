import  {faker} from '@faker-js/faker';

export function generateRandomFirstName(): string {
    return faker.person.firstName();
}

export function generateRandomLastName(): string {
    return faker.person.lastName();
}

export function generateRandomEmail(): string {
    return faker.internet.email();
}

export function generateRandomPhone(): string {
    return faker.phone.number();
}

export function generateRandomPassword(): string {
    return faker.internet.password();
}
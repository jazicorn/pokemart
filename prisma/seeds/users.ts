/* eslint-disable prettier/prettier */
import { PrismaClient, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const createUsers = async () => {
    try {
        // delete all users in database
        await prisma.user.deleteMany({}); // use with caution.

        // create 50 new users
        const amountOfUsers = 10;

        // initilize empty array for new User array
        const users: User[] = [];

        for (let i = 0; i < amountOfUsers; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            const ids = [
                '1111',
                '2222',
                '3333',
                '4444',
                '5555',
                '6666',
                '7777',
                '8888',
                '9999',
                '1234',
            ];

            const user: User = {
                id: ids[i],
                name: faker.datatype.string(10),
                password: faker.internet.password(55),
                email: faker.internet.email(firstName, lastName),
                emailConfirm: false,
                emailVerified: undefined,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                role: 'USER',
            };

            // push each user to User[]
            users.push(user);
        }

        // prisma creares new users in to database
        const addUsers = async () => {
            await prisma.user.createMany({
                data: users,
            });
        };
        //creates object to export users
        addUsers();
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    } finally {
        console.log('✅ Success! | Seed | CreateUsers');
    }
};

export default createUsers;

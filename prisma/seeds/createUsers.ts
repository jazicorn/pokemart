import { PrismaClient, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// function returns array of user ids
let getUserIds = () => {
    let ids = [];
    for (let i = 0; i < 10; i++) {
        let id = faker.datatype.uuid();
        ids.push(id);
    }
    return ids;
};

// store generated user ids for export
export const userIds = getUserIds();

export const totalUsers = userIds.length;

// array of user names
export const userNames = [
    'swagify89',
    'jaysunglivs',
    '86khronickle',
    'laffyjees',
    'kaiquonkap',
    'buggieboo',
    'kra946',
    'angelpiefu',
    '9kdlkd',
    'beetlebus',
];

// prisma creates new users in to database
const deleteUsers = async () => {
    await prisma.user.deleteMany({}); // use with caution.
};

// initilize empty array for new User array
const users: User[] = [];

// create user object
export default function createUsers() {
    try {
        // delete all users in database | important for reseeding database from scratch;
        deleteUsers();

        // create 10 new users
        const amountOfUsers = 10;

        let getUserId = userIds;
        let allUsers = userNames;

        // create array of users
        for (let i = 0; i < amountOfUsers; i++) {
            const firstName = faker.random.alpha(7);
            const lastName = faker.random.alpha(7);

            const user: User = {
                id: getUserId[i],
                name: allUsers[i],
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
        // return array of users
        return users;
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    } finally {
        console.log();
        console.log('✅ Success! | 🎊 Create | 🧑 CreateUsers');
    }
}

import { PrismaClient, Profile } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const createProfiles = async () => {
    try {
        // initilize empty array for new Profile array
        const profiles: Profile[] = [];

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

        for (let i = 0; i < ids.length; i++) {
            let user = ids[i];
            const profile: Profile = {
                id: faker.datatype.uuid(),
                name_first: null,
                name_last: null,
                image: null,
                bio: null,
                handles: undefined,
                complete: null,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                userId: user,
            };

            // push each user to Profile[]
            profiles.push(profile);
        }

        // new user profiles created
        const addProfiles = async () => {
            await prisma.profile.createMany({
                data: profiles,
            });
        };

        addProfiles();
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    }
};

export default createProfiles;

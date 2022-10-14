import { Handle } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { profileIds } from './createProfiles';
import { userNames, totalUsers } from './createUsers';

export const getHandleIds = () => {
    let ids = [];
    for (let i = 0; i < 10; i++) {
        let random = faker.random.numeric(10) + i;
        let id = parseInt(random);
        ids.push(id);
    }
    return ids;
};

// store generated handle ids for export
export const handleIds = getHandleIds();

// initilize empty array for array of handles per user
let handles: Handle[] = [];

export default function createHandles() {
    try {
        // // delete all handles in database | important for reseeding database from scratch;
        // deletehandles();

        let getHandleId = handleIds;
        let getName = userNames;
        let getProfileId = profileIds;

        for (let i = 0; i < totalUsers; i++) {
            let handle: Handle = {
                id: getHandleId[i],
                social: 'TWITTER',
                userName: getName[i],
                link: faker.internet.url(),
                public: false,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                profileId: getProfileId[i],
            };
            handles.push(handle);
        }
        return handles;
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    } finally {
        console.log('✅ Success! | 🎊 Create | 🐦 CreateHandles');
        console.log();
    }
}

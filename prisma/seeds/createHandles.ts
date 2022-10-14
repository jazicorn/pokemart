import { Handle } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { profileIds } from './createProfiles';
import { userNames, totalUsers } from './createUsers';

export const getHandleIds = () => {
    let ids = [];
    let random = faker.random.numeric(10);
    let randomNum = parseInt(random);

    for (let i = 0; i < 10; i++) {
        let id = Math.abs(randomNum + i);
        ids.push(id);
    }
    return ids;
};

// store generated handle ids for export
export const handleIds = getHandleIds();

// initilize empty array for array of handles per user
let handles: Handle[] = [];

export default function createHandles() {
    function ifPublic(param: number) {
        if (param / 2) {
            return false;
        }
        return true;
    }
    try {
        let getHandleId = handleIds;

        let getName = userNames;
        let getProfileId = profileIds;

        for (let i = 0; i < totalUsers; i++) {
            const setProfile = ifPublic(i);
            let handle: Handle = {
                id: getHandleId[i],
                social: 'TWITTER',
                userName: getName[i],
                link: faker.internet.url(),
                public: setProfile,
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

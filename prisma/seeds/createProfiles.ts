import { Profile } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { userIds, userNames, totalUsers } from './createUsers';

const generateAvatar = 'https://avatars.dicebear.com/api/pixel-art/:seed.svg';

// function returns array of profile ids
export const getProfileIds = () => {
    let ids = [];
    for (let i = 0; i < 10; i++) {
        let id = faker.datatype.uuid();
        ids.push(id);
    }
    return ids;
};

// store generated profile ids for export
export const profileIds = getProfileIds();

// initilize empty array for new Profile array
const profiles: Profile[] = [];

// create profile object
export default function createProfiles() {
    try {
        let getId = userIds;
        let getName = userNames;
        let getProfileId = profileIds;

        for (let i = 0; i < totalUsers; i++) {
            const profile: Profile = {
                id: getProfileId[i],
                name_first: faker.name.firstName(),
                name_last: faker.name.lastName(),
                image: generateAvatar,
                bio: faker.lorem.paragraph(4),
                complete: false,
                public: false,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                userId: getId[i],
                userName: getName[i],
            };

            // push each profile to Profile[]
            profiles.push(profile);
        }
        return profiles;
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    } finally {
        console.log('✅ Success! | 🎊 Create | 📋 CreateProfiles');
    }
}

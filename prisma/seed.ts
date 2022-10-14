import { PrismaClient } from '@prisma/client';
import createHandles from './seeds/createHandles';
import createProfiles from './seeds/createProfiles';
import createUsers from './seeds/createUsers';

const prisma = new PrismaClient();

// create users
const users = createUsers();
// create profiles
const profiles = createProfiles();
// create handles
const handles = createHandles();

// new Users created
const seedUsers = async () => {
    await prisma.user.createMany({
        data: users,
    });
};

// new user Profiles with Social Handles created
const seedProfiles = async () => {
    await prisma.profile.createMany({
        data: profiles,
    });
    await prisma.handle.createMany({
        data: handles,
    });
};

const load = async () => {
    try {
        // call seed functions
        seedUsers();
        console.log('🎉 Success! | 🌱 Seed | 🧑 SeedUsers');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    try {
        seedProfiles();
        console.log('🎉 Success! | 🌱 Seed | 📋 SeedProfiles');
        console.log('🎉 Success! | 🌱 Seed | 🐦 SeedHandles');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load().catch((e) => {
    console.log(e);
});

import { PrismaClient } from '@prisma/client';
import createUsers from './seeds/users';

const prisma = new PrismaClient();

const load = async () => {
    try {
        createUsers();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};
load();

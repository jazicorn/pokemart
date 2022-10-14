import * as fs from 'fs';
import createUsers from '../seeds/createUsers';

// convert user array to json file
const createUserFile = async () => {
    try {
        const createFile = () =>
            fs.writeFile(
                'users.json',
                JSON.stringify(createUsers()),
                (error) => {
                    if (error) throw error;
                }
            );
        createFile();
    } catch (e) {
        // stop operations if error
        console.error(e);
        process.exit(1);
    } finally {
        console.log();
        console.log('👍 Success! | File | CreateJSONFile');
    }
};

export default createUserFile;

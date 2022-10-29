import type { NextPage } from 'next';
import Generator from '../../components/site/Generator';

const Pokemon: NextPage = () => (
    <div className="grow flex flex-col justify-between items-stretch bg-slate-100">
        <div className="basis-1/6 flex flex-row justify-center content-center bg-green-100">
            <div className="flex flex-col justify-center content-center bg-pink-300 ">
                <h1 className="justify-center content-center bg-purple-100">
                    Pokemon
                </h1>
            </div>
        </div>
        <div className=" basis-4/6 grow flex lg:flex-row sm:flex-col flex-wrap justify-center content-center bg-pink-100">
            <Generator />;
        </div>
        <div className="basis-1/6 bg-green-100">
            <div></div>
        </div>
    </div>
);

export default Pokemon;

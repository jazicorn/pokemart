import type { GetStaticProps, NextPage } from 'next';
import Generator from '../../components/site/Generator';

/**Tip: You CANNOT pass props (request data) directly from components, MUST pass props throgh NextPage */
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.API_ROUTES_URL}/pokemon/`);
    const pokeObj = await res.json();

    return {
        props: {
            pokeObj,
        },
    };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/**@ts-ignore */
const Pokemon: NextPage = ({ pokeObj }) => (
    <div className="grow flex flex-col justify-between items-stretch bg-slate-100">
        <div className="basis-1/6 flex flex-row justify-center content-center bg-green-100">
            <div className="flex flex-col justify-center content-center bg-pink-300 ">
                <h1 className="justify-center content-center bg-purple-100">
                    Pokemon
                </h1>
            </div>
        </div>
        <div className=" basis-4/6 grow flex lg:flex-row sm:flex-col flex-wrap justify-center content-center bg-pink-100">
            <div className="basis-1/3 bg-orange-100 w-1/3 h-full">By ID</div>
            {/* pass pokeObj to Generator component */}
            <Generator pokemon={pokeObj} />
            <div className="basis-1/3 bg-slate-300 h-full">By Name</div>
        </div>
        <div className="basis-1/6 bg-green-100">
            <div></div>
        </div>
    </div>
);

export default Pokemon;

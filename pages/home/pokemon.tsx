// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore:2339 -- will create type for pokemon data later
// ts-ignore for specific error code not working useing no-check for now
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import Generator from '../../components/pokemon/Generator';

/**Tip: You CANNOT pass props (request data) directly from components, MUST pass props throgh NextPage */
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/pokemon/`);
    const pokeObj = await res.json();

    return {
        props: {
            pokeObj,
        },
    };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/**@ts-ignore */
const Pokemon: NextPage = ({ pokeObj }) => {
    const [data, setData] = useState(pokeObj);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_ROUTE}/pokemon/`
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            // console.log('result is: ', JSON.stringify(result, null, 4));
            console.log(result);

            setData(result);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (err) return <h1>Err</h1>;
    if (!data) return <p>No profile data</p>;
    return (
        <div className="grow flex flex-col justify-between items-stretch bg-slate-100">
            {/**Panel 1 */}
            <div className="basis-1/6 flex flex-row justify-center content-center bg-green-100">
                <div className="flex flex-col justify-center content-center bg-pink-300 ">
                    <h1 className="justify-center content-center bg-purple-100">
                        Pokemon
                    </h1>
                </div>
            </div>
            {/**Panel 2 */}
            <div className=" basis-4/6 flex flex-row flex-wrap justify-center content-center bg-pink-100">
                <div className="basis-1/3 bg-orange-100 w-1/3 h-full">
                    By ID
                </div>
                <div className="basis-1/3 bg-indigo-300 h-full flex flex-col justify-start content-center">
                    <button onClick={handleClick}>Generate Pokemon</button>
                    <Generator pokemon={data} handleClick={handleClick} />
                </div>
                <div className="basis-1/3 bg-slate-300 h-full">By Name</div>
            </div>
            {/**Panel 3 */}
            <div className="basis-1/6 bg-green-100">
                <div></div>
            </div>
        </div>
    );
};

export default Pokemon;

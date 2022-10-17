export default function Welcome() {
    return (
        <div className="grow flex flex-col justify-between items-stretch bg-slate-100">
            <div className="h-1/6 flex flex-row justify-center content-center bg-green-100">
                <div className="flex flex-col justify-center content-center bg-pink-300 ">
                    <h1 className="justify-center content-center bg-purple-100">
                        Welcome to Template-NextJS-Full
                    </h1>
                </div>
            </div>
            <div className="grow flex flex-col justify-center content-center bg-pink-100">
                <div className="p-40 bg-blue-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className="h-1/6 bg-green-100">
                <div></div>
            </div>
        </div>
    );
}

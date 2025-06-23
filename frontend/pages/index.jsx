
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';

const Nicknames = createContext();

const Page = () => {
    const nomes = []
    return (
        <>
            <Nicknames.Provider value={ nomes }>
                <Outlet />
            </Nicknames.Provider>
        </>
    )
}

export default Page


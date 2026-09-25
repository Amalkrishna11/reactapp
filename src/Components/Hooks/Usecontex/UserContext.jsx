import { createContext } from "react";

const UserContext = createContext();

export const Userprovider = ({ children }) => {

    const user = {
        name: "Anu",
        email: "anu@gmail.com"
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
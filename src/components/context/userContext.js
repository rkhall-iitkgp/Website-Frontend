import { createContext, useState } from "react";
export const UserContext = createContext("");


const UserContextProvider = (props) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(
    //     localStorage.getItem("userData") ? true : false
    // );
    // const [user, setUser] = useState(
    //     JSON.parse(localStorage.getItem("userData"))
    // );

    const [Signupdata, setSignupdata] = useState([]);

    


    return (
        <UserContext.Provider
            value={{
                Signupdata,
                setSignupdata,
            
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};




export default UserContextProvider;
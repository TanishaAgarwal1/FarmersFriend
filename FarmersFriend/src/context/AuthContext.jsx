import { createContext, useContext, useState } from "react";

//create context is used to save yourself from prop drilling , and to maintain global state 
export const AuthContext = createContext(); //obect returns with user  data 


export const useAuthContext = () => {
	return useContext(AuthContext);  
};

export const AuthContextProvider = ({ children }) => {  //it wraps authuser in children that is a prop  and can accessed anywhere
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);  //chat-user is the key 

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};

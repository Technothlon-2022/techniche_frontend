import axios from 'axios';
import { json, resolvePath, useNavigate } from "react-router-dom";


const API_URL= "http://localhost:8001";

const signup = async (email, password) => {

    
    const response = await axios.post(
        API_URL + "/signup", {
        email,
        password
    }
    );
    console.log("hello");
    if (response.data.accessToken) {
        localStorage.setItem("user", json.stringify(response.data));
    }
    return response.data;
};


const  login =  async (email,password) => {



    localStorage.setItem("in login", "asdfsd")
    localStorage.setItem(email,password)
  

    const response = await axios.post(
        API_URL + "/login", {
        email, password
    }
    );
  
    localStorage.setItem("user", response);
   
    if (response.data.accessToken) {
        localStorage.setItem("user", "chu chu");
    }
    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return json.parse(localStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
}

export default authService
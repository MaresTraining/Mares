import axios from "axios";
import { API } from "../index";
import { sha256 } from "js-sha256";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useSystemContext } from "./SystemContext";

const Context = createContext();
export default function AuthContextProvider(props) {
  const { goToPage, showToast, setLoading, setSession, getSession, resetSession } = useSystemContext();
  const [hasLogin, setHasLogin] = useState(false);
  const [isStudent, setIsStudent] = useState();
  const [isCompany, setIsCompany] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const handleUser = useCallback((user) => {
    if (user) {
      user.password = "";
    }
    setSession("user", user);
    setUser(user);
    setHasLogin(user != null);
    setIsCompany(user != null && user.role === "company")
    setIsStudent(user != null && user.role === "student")
  }, [setSession])


  useEffect(() => {
    handleUser(getSession("user"));
  }, [getSession, handleUser]);

  const signUpStudent = async ({firstName, lastName, email, password}) => {
    try {
      setLoading(true);
      const hash = sha256(password);
      const ob = { firstName: firstName, lastName: lastName, email: email, password: hash, role: "student" };
      const response = await axios.post(`${API}/student/sign-up`, ob);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        ob._id = response.data;
        ob.password = "";
        handleUser(ob)
        showToast("success", "Sign up success!")
      }
      else {
        const message = response.message;
        setError(message)
      }
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  const signUpCompany = async ({name, commercialRegistrationNumber, email, password}) => {
    try {
      setLoading(true);
      const hash = sha256(password);
      const ob = { name: name, commercialRegistrationNumber: commercialRegistrationNumber, email: email, password: hash, role: "company" };
      const response = await axios.post(`${API}/company/sign-up`, ob);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        ob._id = response.data;
        ob.password = "";
        handleUser(ob)
        showToast("success", "Sign up success!")
      }
      else {
        const message = response.message;
        setError(message)
      }
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }


  const signIn = async ({email, password, role}) => {
    try {
      setLoading(true);
      const hash = sha256(password);
      const ob = { email: email, password: hash };
      const response = await axios.post(`${API}/${role}/sign-in`, ob);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        handleUser(response.data)
        showToast("success", "Sign in success!")
      }
      else {
        const message = response.message;
        setError(message)
      }
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  const signOut = () => {
    handleUser(null);
    resetSession();
  }

  const resetPassword = async ({secretQuestion, secretAnswer}) => {
    try {
      setLoading(true);
      const hash = sha256(secretAnswer);
      const ob = { secretQuestion: secretQuestion, secretAnswer: hash };

      const response = await axios.post(`${API}/reset-password`, ob);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        goToPage("reset-password");
      }
      else {
        const message = response.message;
        setError(message)
      }
    } catch (error) {
      setError(error)
    }

  }

  const setSecret = async ({secretQuestion, secretAnswer}) => {
    try {
      setLoading(true);
      const hash = sha256(secretAnswer);
      const ob = { uid: user._id, secretQuestion: secretQuestion, secretAnswer: hash };
      const role = user.role;
      const response = await axios.post(`${API}/${role}/secret`, ob);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        showToast("success", "Secret info added successfully!")
      }
      else {
        const message = response.message;
        setError(message)
      }
    } catch (error) {
      setLoading(false);
      setError(error)
    }

  }


  const value = {
    user,
    signUpStudent,
    signUpCompany,
    signIn,
    signOut,
    resetPassword,
    setSecret,
    error,
    hasLogin,
    isCompany,
    isStudent,
  };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}
export const useAuthContext = () => useContext(Context);


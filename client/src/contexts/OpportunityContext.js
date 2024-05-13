import axios from "axios";
import { API } from "../index";
import { sha256 } from "js-sha256";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useSystemContext } from "./SystemContext";
import { useAuthContext } from "./AuthContext";

const Context = createContext();
export default function OpportunityContextProvider(props) {
  const {user} = useAuthContext();
  const { goToPage, showToast, handleError, setLoading, setSession, getSession, resetSession } = useSystemContext();
  const [opportunities, setOpportunities] = useState();

  const handleOpportunities = useCallback((opportunities) => {
    setSession("opportunities", opportunities);
    setOpportunities(opportunities);
  }, [setSession])

  const handleAddOpportunity = (opportunity) => {
    const _opportunities =  opportunities.map((v, i)=>{
      if(v._id=== opportunity._id){
       return opportunity;
      }
      else{
        return v;
      }
    })
    handleOpportunities(_opportunities)
  };


  useEffect(() => {
    handleOpportunities(getSession("opportunities"));
  }, [getSession, handleOpportunities]);

  const saveOpportunity = async (opportunity) => {
    opportunity.companyId= user._id;
    try {
      setLoading(true);
      const response = await axios.post(`${API}/opportunity`, opportunity);
      setLoading(false);
      console.log(response)
      const status = response.status;
      if (status === 200) {
        opportunity = response.data.result
        handleAddOpportunity(opportunity)
        showToast("success", "Sign up success!")
      }
      else {
        const message = response.message;
        handleError(message)
        console.log(message)

      }
    } catch (error) {
      setLoading(false);
      console.log(error.message)
      handleError(error.message)

    }
  }

 

  const updateOportunity = async (data, _id) => {
    try {
      setLoading(true);
      const dataToUpdate = Object.fromEntries(
        Object.keys(data)
          .filter(key => key !== 'password' && key !== "email")
          .map(key => [key, data[key]])
      );
      const response = await axios.patch(`${API}/opportunity/update/${_id}`, dataToUpdate);
      setLoading(false);
      const status = response.status;
      if (status === 200) {
        handleAddOpportunity(data)
        showToast("success", "Updating success!")
      }
      else {
        const message = response.message;
        handleError(message)
      }
    } catch (error) {
      setLoading(false);
      handleError(error.message)
    }
  }

  const registerInOpportunity = async (opportunity_id, student_id) => {
  }





  const value = {
    opportunities,
    registerInOpportunity,
    updateOportunity,
    saveOpportunity
  };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}
export const useOpportunityContext = () => useContext(Context);


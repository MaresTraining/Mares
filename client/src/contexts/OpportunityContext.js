import axios from "axios";
import { API } from "../index";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useSystemContext } from "./SystemContext";
import { useAuthContext } from "./AuthContext";

const Context = createContext();
export default function OpportunityContextProvider(props) {
  const { user, isCompany } = useAuthContext();
  const { goToPage, showToast, handleError, setLoading, setSession, getSession, resetSession } = useSystemContext();
  const [opportunities, setOpportunities] = useState(getSession("opportunities") ?? []);
  const [loaded, setLoaded] = useState(false);

  const handleOpportunities = useCallback((opportunities) => {
    setSession("opportunities", opportunities);
    setOpportunities(opportunities);
  }, [setSession])

  const handleAddOpportunity = (opportunity) => {
    const _opportunities = opportunities.map((v, i) => {
      if (v._id === opportunity._id) {
        return opportunity;
      }
      else {
        return v;
      }
    })
    handleOpportunities(_opportunities)
  };

  const loadOpportunities = useCallback(async () => {
    const userId = user._id;
    try {
      setLoading(true);
      const link= `${API}/opportunity${isCompany?"/compnay/"+userId: ""}`;
      const response = await axios.get(link);
      setLoading(false);
      if (response.status === 200) {
        const _opportunities = response.data;
        handleOpportunities(_opportunities)
      } else {
        // handleError(response.data.message);
        handleOpportunities([])

      }
    } catch (error) {
      setLoading(false);
     console.log(error.response?.data?.message || error.message);
    }
  }, [handleOpportunities, setLoading, user]);

  useEffect(() => {
    if (!loaded && user) {
      setLoaded(true);
      loadOpportunities();
    }
  }, [getSession, handleOpportunities, loadOpportunities, loaded, user]);


  const addOpportunity = async (opportunity) => {
    opportunity.companyId = user._id;
    try {
      setLoading(true);
      const response = await axios.post(`${API}/opportunity`, opportunity);
      setLoading(false);
      if (response.status === 200) {
        opportunity = response.data;
        handleAddOpportunity(opportunity)
        showToast("success", "تمت إضافة الفرصة بنجاح!");
        goToPage(isCompany ? "display-published" : "dispaly-opportunities")
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      handleError(error.response?.data?.message || error.message);
    }
  };

  const updateOportunity = async (data, _id) => {
    try {
      setLoading(true);
      const dataToUpdate = Object.fromEntries(
        Object.keys(data)
          .filter(key => key !== 'password' && key !== "email")
          .map(key => [key, data[key]])
      );
      const response = await axios.patch(`${API}/opportunity/${_id}`, dataToUpdate);
      setLoading(false);
      if (response.status === 200) {
        const opportunity = response.data;
        handleAddOpportunity(opportunity)
        showToast("success", "تم تحديث الفرصة بنجاح!");
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      handleError(error.response?.data?.message || error.message);
    }
  }

  const value = {
    opportunities,
    updateOportunity,
    addOpportunity,
    loadOpportunities,
  };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}
export const useOpportunityContext = () => useContext(Context);


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPersonArray } from "../store/actions/actions";
import { APIServer } from "../axios/axios";
import { GET_PERSON_DATA } from "../constans/default-consts";



export const UseGetPersonData = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    getDataRequest();
  }, [])

  const getDataRequest = async () => {
    try {
      const res = await APIServer.get(GET_PERSON_DATA);
      dispatch(setPersonArray(res.data.array));
    } catch (error) {
      console.log("error occured:", error);
    }
  };
};

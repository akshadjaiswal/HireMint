import axios from "axios";
import { useEffect } from "react";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { setCompanies } from "@/redux/companySlice";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  console.log("all companies calling hook")
  
  useEffect(() => {
    console.log("all companies useeffect hook")
    const fetchCompanies = async () => {
      try {
        console.log("all companies fetch call")
        const res = await axios.get(`${COMPANY_API_END_POINT}/get/`, {
          withCredentials: true,
        });

        if (res.data.success) {
          console.log(res)
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;

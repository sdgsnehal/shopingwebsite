import { useEffect, useState } from "react";
import { makeRequest } from "../makerequest";

const useFetch =  (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchdata();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;

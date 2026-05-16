import axios
from "axios";



const BASE_URL =

  "http://localhost:5000/api/planner";



export const getPlanner =

  async (firebaseUID) => {

    const response =

      await axios.get(

        `${BASE_URL}/${firebaseUID}`
      );



    return response.data;
  };
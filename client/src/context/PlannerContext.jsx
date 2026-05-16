import {

  createContext,

  useContext,

  useState,

} from "react";



const PlannerContext =
  createContext();



export function PlannerProvider({

  children,

}) {

  const [

    tasks,

    setTasks,

  ] = useState([

    {

      title:
        "Practice DSA",

      time:
        "7 PM",

      duration:
        "2 Hours",

    },

    {

      title:
        "React Revision",

      time:
        "9 PM",

      duration:
        "1 Hour",

    },

  ]);



  const [

    progress,

    setProgress,

  ] = useState(68);



  const [

    streak,

    setStreak,

  ] = useState(12);



  const [

    recommendations,

    setRecommendations,

  ] = useState([

    "Practice recursion daily",

    "Revise React Hooks",

  ]);



  return (

    <PlannerContext.Provider

      value={{

        tasks,

        setTasks,

        progress,

        setProgress,

        streak,

        setStreak,

        recommendations,

        setRecommendations,

      }}
    >

      {children}

    </PlannerContext.Provider>
  );
}



export function usePlanner() {

  return useContext(
    PlannerContext
  );
}
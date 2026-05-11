import { createContext, useContext, useState } from "react";

const OnboardingContext =
  createContext();

export function OnboardingProvider({
  children
}) {

  const [goal, setGoal] =
    useState("");

  const [subjects, setSubjects] =
    useState([]);

  const [studyHours, setStudyHours] =
    useState(4);

  const [strongAreas, setStrongAreas] =
    useState([]);

  const [weakAreas, setWeakAreas] =
    useState([]);

  return (

    <OnboardingContext.Provider
      value={{

        goal,
        setGoal,

        subjects,
        setSubjects,

        studyHours,
        setStudyHours,

        strongAreas,
        setStrongAreas,

        weakAreas,
        setWeakAreas,

      }}
    >

      {children}

    </OnboardingContext.Provider>
  );
}

export const useOnboarding =
  () => useContext(OnboardingContext);
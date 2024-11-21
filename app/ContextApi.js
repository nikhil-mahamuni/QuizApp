"use client";
import { quizData } from "@/quizData";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [allQuizes, setAllQuizes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    setAllQuizes(quizData)
  }, []);
  return (
    <GlobalContext.Provider value={
      { 
        allQuizes,
        setAllQuizes, 
        quizToStartObject: {selectedQuiz, setSelectedQuiz}
        }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
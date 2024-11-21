"use client"

import React from "react";
import QuizCard from "./QuizCard";
import PlaceHolder from "./PlaceHolder";
import { useGlobalContext } from "@/app/ContextApi";

const QuizzArea = () => {
  const {allQuizes} = useGlobalContext();
  return (
    <div className="mx-12 mt-10">
      {allQuizes.length === 0 ? (
        <PlaceHolder></PlaceHolder>
      ) : (
        <>
          <h2 className="text-xl font-bold">My Quizzes</h2>
          <div className="mt-6 flex gap-2 flex-wrap">
            {
              allQuizes.map((singleQuiz, index) => (
                <QuizCard key={singleQuiz.id || index} quiz={singleQuiz}></QuizCard>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
};

export default QuizzArea;

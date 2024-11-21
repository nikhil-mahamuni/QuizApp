"use client";

import React, { useEffect, useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useGlobalContext } from "../ContextApi";
import { FaRegFrownOpen } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const { quizToStartObject, allQuizes } = useGlobalContext();
  const { selectedQuiz, setSelectedQuiz } = { ...quizToStartObject };
  let quiz;
  let questions = [];

  if (selectedQuiz != null) {
    quiz = allQuizes.find((obj) => obj.quizTitle === selectedQuiz);
    questions = quiz.quizQuestion;
  }

  let [index, setIndex] = useState(0);

  const nextQuiz = () => {
    if (index === questions.length - 1) return;
    setIndex((prev) => prev + 1);
  };

  const prevQuiz = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  return (
    <div>
      {selectedQuiz === null ? (
        <NoQuizSelected></NoQuizSelected>
      ) : (
        <>
          <div className="w-full px-8 py-5 shadow-md">
            <QuizHeader quiz={quiz}></QuizHeader>
          </div>
          <QuizStartQuestion
            currentQuestion={questions[index]}
            index={index}
            nextQuiz={nextQuiz}
            prevQuiz={prevQuiz}
          ></QuizStartQuestion>
        </>
      )}
    </div>
  );
};

export default page;

const QuizStartQuestion = ({ currentQuestion, index, nextQuiz, prevQuiz }) => {
  const { mainQuestion, choices } = { ...currentQuestion };

  return (
    <div className="rounded-sm m-9 w-9/12 flex flex-col items-center justify-center">
      {/* QUESTION */}
      <div className="flex gap-3">
        <span
          className="bg-mainColur max-h-10 p-5 flex items-center
        justify-center font-bold text-white rounded-md"
        >
          {index + 1}
        </span>
        <p>{mainQuestion}</p>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <QuizOptions OptionNumber={"A"} Option={choices[0]}></QuizOptions>
        <QuizOptions OptionNumber={"B"} Option={choices[1]}></QuizOptions>
        <QuizOptions OptionNumber={"C"} Option={choices[2]}></QuizOptions>
        <QuizOptions OptionNumber={"D"} Option={choices[3]}></QuizOptions>
      </div>
      <div className="flex gap-2 flex-col md:flex-row items-center mt-10">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 min-w-60
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-[18px]"
          onClick={() => prevQuiz()}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 min-w-60
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-[18px]"
          onClick={() => nextQuiz()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const QuizOptions = ({ OptionNumber, Option }) => {
  return (
    <div
      className="p-3 ml-11 w-10/12 border hover:bg-mainColur transition-all ease-linear duration-200
     border-gray-300 rounded-md hover:text-white"
    >
      <span className="px-2 py-1 rounded-md">{OptionNumber}:</span>
      <span className="text-justify">{Option}</span>
    </div>
  );
};

const QuizHeader = ({ quiz }) => {
  const { quizTitle } = { ...quiz };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <MdQuestionAnswer size={45} color="#9209D8"></MdQuestionAnswer>
        <div className="">
          <h2 className="font-bold text-[20px] text-mainColur">{quizTitle}</h2>
          <span className="text-gray-500 font-medium">
            {quiz.quizQuestion.length} Questions
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <FaRegClock size={25} color="#9209D8" />
        <span className="font-medium text-gray-500">00:20:30</span>
      </div>
    </div>
  );
};

const NoQuizSelected = () => {
  return (
    <div className="flex justify-center gap-2 items-center h-screen flex-col">
      <FaRegFrownOpen size={120} color="#9209D8" />
      <div className="text-center">
        <h2 className="font-bold">Please Select a Quiz Option</h2>
        <Link href="/">Redirect To Home Page Click Here</Link>
      </div>
    </div>
  );
};

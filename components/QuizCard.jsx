import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import Link from 'next/link';
import { FaPlayCircle } from "react-icons/fa";
import { useGlobalContext } from '@/app/ContextApi';

const QuizCard = ({quiz}) => {
  
  const {quizTitle, quizQuestion} = {...quiz}
  const winningRate = sucessRate(quiz);
  
  const {quizToStartObject} = useGlobalContext();
  const {setSelectedQuiz} = {...quizToStartObject}

  return (
    <div className='rounded-lg flex flex-col gap-2 border w-[300px] border-gray-300 bg-white p-4' onClick={() => setSelectedQuiz(quizTitle)}>
        {/* IAMGE CONTAINER */}
        <div className='relative bg-purple-100 w-full h-[180px] flex items-center justify-between rounded-xl'>
          {/* MORE OPTIONS */}
          <div className='absolute cursor-pointer top-1 right-3'>
            <FiMoreHorizontal height={13} width={13} size={25} />
          </div>
        </div>

        {/* Quiz Title */}
        <div className='mt-3 text-left'>
          <h1>{quizTitle}</h1>
          <p className='font-light text-gray-500'>{quizQuestion.length} Questions</p>
          <div className='flex items-center gap-5'>
            <p>Sucess Rate: {winningRate}%</p>
            <Link href="/quiz-start"><FaPlayCircle color='#9209D8'size={25}/></Link>
          </div>
        </div>
      </div>
  )
}

export default QuizCard

const sucessRate = (quiz) => {
  let correctQuestions = 0;
  let totalAttempts = 0;
  let sucessRate = 0;

  quiz.quizQuestion.forEach((question) => {   
    totalAttempts += question.statistics.totalAttempts;
    correctQuestions += question.statistics.correctAttempts;
  })

  sucessRate = Math.ceil((correctQuestions/ totalAttempts) * 100);
  return sucessRate;
}

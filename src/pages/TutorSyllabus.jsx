import React from 'react'
import TeachingSyllabus from '../components/TeachingSyllabus';

const TutorSyllabus = () => {
  return (
    <>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px] ">
        <TeachingSyllabus />
        <TeachingSyllabus />
      </div>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px]  mb-4">
        <TeachingSyllabus />
        <TeachingSyllabus />
      </div>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px]  mb-4">
        <TeachingSyllabus />
        <TeachingSyllabus />
      </div>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px]  mb-4">
        <TeachingSyllabus />
        <TeachingSyllabus />
      </div>
    </>
  );
}

export default TutorSyllabus
import React from 'react'
import Reviews from '../components/Reviews';

const TutorReview = () => {
  return (
    <>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px] ">
        <Reviews />
        <Reviews />
      </div>
      <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px] ">
        <Reviews />
        <Reviews />
      </div>
    </>
  );
}

export default TutorReview
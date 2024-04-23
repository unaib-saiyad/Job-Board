import React from 'react';
import FeatureSec from '../Candidate/FeatureSec';
import InterviewMng from '../Candidate/InterviewMng';
import Sidebar from '../common/Sidebar';

function CandidateDash() {
  return (
    <>
    <div className='d-flex'>
      <Sidebar/>
      <FeatureSec/>
      <InterviewMng/>
    </div>
    </>
  )
}

export default CandidateDash;
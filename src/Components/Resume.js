import React from 'react';
import Res from '../pictures/ReginaldResume.png'


const Resume = () => {
    return(
        <div>
      <section id="resume-background">
        <img src={Res} id="resume" width="500px" height="600px" alt="resume" />
      </section>
        </div>
    )
}

export default Resume;
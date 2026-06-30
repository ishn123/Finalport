import React from 'react';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
function About({ src1, src2 }) {
  const navigate = useNavigate();
  const showConnectBox = () => {
    if(window.innerWidth <= 600){
      navigate('/connect');
      return
    }
    const ele = document.getElementsByClassName("connect-card")[0];

    
    ele.classList.add("connect-box-animation");
  
  }
  return (
    <>
      <div id="about">
        <Fade direction="left" className='fadewidth' triggerOnce>
          <div id='card' >
            <img src={src2} height={220} width={220} alt="Ishan Arora" />
            <div id="textabout">
              <h5>(ABout me)</h5>
              <p>I'm a frontend-focused fullstack developer and Werkstudent at Mercedes-Benz, currently pursuing a Master's in Embedded Systems at the University of Siegen. I enjoy owning features end-to-end — from intuitive, responsive React interfaces to GraphQL and Node.js backends — and building internal tools in TypeScript. With experience across Mercedes-Benz, RoboRelax and EPAM, I care about clean, maintainable code and a great user experience. Let's collaborate and turn your ideas into polished digital products.</p>
              <a onClick={()=>showConnectBox()}>Let's talk</a>
            </div>
          </div>
        </Fade>
      </div>
      { src1 &&
      <div id="about" className='toopp'>
        <Fade direction="left" className='fadewidth' triggerOnce>
          <div id='card'>
            <img src={src2} alt="Ishan Arora" height={200} width={200}/>
            <div id="textabout">
              <h5>(ABout me)</h5>
              <p>I'm a frontend-focused fullstack developer and Werkstudent at Mercedes-Benz, currently pursuing a Master's in Embedded Systems at the University of Siegen. I enjoy owning features end-to-end — from intuitive, responsive React interfaces to GraphQL and Node.js backends — and building internal tools in TypeScript. With experience across Mercedes-Benz, RoboRelax and EPAM, I care about clean, maintainable code and a great user experience. Let's collaborate and turn your ideas into polished digital products.</p>
           <a onClick={()=>showConnectBox()} style={{padding:2,marginBottom:2}}>Let's talk</a>
            </div>
          </div>
        </Fade>
      </div>
      }
    </>
  )
}

export default About
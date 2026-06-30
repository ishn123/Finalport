import React, { useEffect } from 'react';
import './exp.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import "./testimonial.css";
import Splide from '@splidejs/splide';
function Exper() {

  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);

  }
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      direction: 'ltr',
      width: '72%',
      height: '36rem',
      autoplay: true,
      arrows: false,
      pagination: false,
      perPage: 1,
      breakpoints: {
        1100: {
          height: '40rem',
          width: '90%'
        },
        720: {
          height: '46rem',
          width: '100%'
        }
      },
    });
    splide.mount();
  }, []);
  return (
    <>

      <div className="wro">
        <div className="box">
          <div className="expe">

            <div className="word">Ishan</div>
            <main className="CV-page">
              <div className="CV-grid">
                <div className="CV-grid-column">
                  <div className="CV-jobs">
                    <section className="CV-timeline CV-job">
                      <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Werkstudent &ndash; Software Developer </span>&#8211; <span className="CV-timeline-heading-location">Mercedes-Benz, Germany </span><small className="CV-timeline-heading-duration">2025 - Present</small></h3>
                      <ul className="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li className="CV-job-timeline-item">Develop internal process-automation tools in TypeScript with GraphQL APIs, owning features end-to-end.</li>
                          <li className="CV-job-timeline-item">Model and implement business processes (BPMN) and integrate them into developer-facing tooling.</li>
                          <li className="CV-job-timeline-item">Containerise services with Docker and maintain CI/CD pipelines for reliable, automated deployments.</li>
                          <li className="CV-job-timeline-item">Collaborate within an agile team to ship and iterate on internal developer tools.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="TypeScript" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="GraphQL" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="BPMN" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Docker" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="CI/CD" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Node.js" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section className="CV-timeline CV-job">
                      <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Working Student &ndash; Fullstack Developer </span>&#8211; <span className="CV-timeline-heading-location">RoboRelax, Germany </span><small className="CV-timeline-heading-duration">Oct 2024 - 2025</small></h3>
                      <ul className="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li className="CV-job-timeline-item">Built and shipped features in React and Redux, owning UI components and state management end-to-end.</li>
                          <li className="CV-job-timeline-item">Implemented a full booking system (appointments &amp; availability) with a React frontend and a Java/GraphQL backend.</li>
                          <li className="CV-job-timeline-item">Built Spring Boot services and performant GraphQL APIs, reducing client-side over-fetching.</li>
                          <li className="CV-job-timeline-item">Collaborated with product and design in an Agile/Scrum team to deliver user-facing features.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="React" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Redux" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="GraphQL" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Spring Boot" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Java" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="REST" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section className="CV-timeline CV-job">
                      <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Technical Consultant </span>&#8211; <span className="CV-timeline-heading-location">Mercedes-Benz R&amp;D, India </span><small className="CV-timeline-heading-duration">Apr 2023 - Sep 2024</small></h3>
                      <ul className="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li className="CV-job-timeline-item">Owned backend workflows end-to-end on an internal engineering platform (SBM, C++ scripting), from requirements to deployment.</li>
                          <li className="CV-job-timeline-item">Designed secure microservice communication using gRPC and Kafka.</li>
                          <li className="CV-job-timeline-item">Automated a REST API integration, removing manual steps and improving data availability for downstream teams.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="SBM" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="C++" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="gRPC" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Kafka" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="REST" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Microservices" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section className="CV-timeline CV-job">
                      <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Software Engineer </span>&#8211; <span className="CV-timeline-heading-location">EPAM Systems, India </span><small className="CV-timeline-heading-duration">Feb 2022 - Mar 2023</small></h3>
                      <ul className="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li className="CV-job-timeline-item">Built automated web and mobile UI test suites (Selenium, Appium) for DBS Bank, owning release quality.</li>
                          <li className="CV-job-timeline-item">Built a Behaviour-Driven Development framework for mobile and internet banking, fully integrated into the CI/CD pipeline.</li>
                          <li className="CV-job-timeline-item">Partnered with client product and engineering teams to define test strategy and shorten release cycles.</li>


                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="Selenium" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Appium" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Java" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Jenkins" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="CI/CD" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Test Automation" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <section className="container-testi">
            <div className="section" id="testimonials">
              <div className="section__header section__header--center">
                <h2 className="section__title">People Says</h2>
                <p className="section__subtitle">What others think about me</p>
              </div>
              <div className="testimonials">
                <div className="splide">
                  <div className="splide__track">
                    <div className="splide__list">
                      <div className="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span className="testimonials__sign">
                            <i className="bi bi-chat-square-quote"></i>
                          </span>
                          <p className="testimonials__quotes">
                            🤝 As a team player, Ishan excels in collaboration. Their open communication style, willingness to share insights, and eagerness to contribute ideas have fostered an environment of creativity and growth within our team. They have a knack for translating complex technical jargon into understandable terms, making them an invaluable bridge between developers and non-technical stakeholders.
                          </p>
                          <div className="testimonials__author">
                            <div className="testimonials__authorInfo">
                              <h4>Sanaula Haq</h4>
                              <p>Assistant Vice President, Digital Bank of Singapore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span className="testimonials__sign">
                            <i className="bi bi-chat-square-quote"></i>
                          </span>
                          <p className="testimonials__quotes">
                            🌐 Ishan's projects bear testimony to their commitment to delivering excellence. Whether it's architecting robust server-side systems, optimizing performance for scalability, or conceptualizing user-centric features, their contributions consistently exceed expectations.
                          </p>
                          <div className="testimonials__author">
                            <div className="testimonials__authorInfo">
                              <h4>Tanvi Aggarwal</h4>
                              <p>Principal Software Enginner,MBRDI</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span className="testimonials__sign">
                            <i className="bi bi-chat-square-quote"></i>
                          </span>
                          <p className="testimonials__quotes">
                            🚀 Ishan's impact is truly transformative. Mentees under their guidance have not only gained a solid foundation in DSA but have also developed a mindset of analytical thinking and strategic problem-solving that extends far beyond the realm of algorithms.
                          </p>
                          <div className="testimonials__author">
                            <div className="testimonials__authorInfo">
                              <h4>Bittu Aggarwal</h4>
                              <p>Academic Head and Counsellor,Geekster</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <Menu></Menu>


        </div>
        <div className="next-work">
          <span id="nword">Next</span>
          <div className="elem" onClick={() => { navigateHandler('/projects'); }}>
            <h1>WORK</h1>
            <h2>+</h2>
            <div className="center14"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exper

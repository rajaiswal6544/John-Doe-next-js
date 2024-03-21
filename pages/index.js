import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SwiperSlide } from "swiper/react";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  const url =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
  const [data, setData] = useState({});
  const [skills, setskills] = useState([]);
  const [services, setservices] = useState([]);
  const [social, setsocial] = useState([]);
  const [timeline, settimeline] = useState([]);
  const [experience, setexperience] = useState([]);
  async function  fetchInfo(){
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.user.about));
  };

  useEffect(() => {
    fetchInfo();
    const result = fetch(url);
    // Including skills which are enabled
    result
      .then((response) => response.json())
      .then((s) => setskills(s.user.skills.filter((item) => item.enabled)));
    fetch(url)
      .then((r) => r.json())
      .then((e) => setservices(e.user.services.filter((item) => item.enabled)));
  }, []);
  // Including social handles which are enabled
  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((soc) =>
        setsocial(soc.user.social_handles.filter((item) => item.enabled))
      );
    console.log(social);
  }, [setsocial]);
  // Implementing forEducation filter to distinguish between education and experience which are enabled
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((time) =>
        settimeline(
          time.user.timeline.filter((item) => item.forEducation && item.enabled)
        )
      );
    console.log(timeline.length);
  }, [settimeline]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((exp) =>
        setexperience(
          exp.user.timeline.filter((item) => !item.forEducation && item.enabled)
        )
      );
    console.log(timeline.length);
  }, [settimeline]);
  const mainDiv = {
    width: "600px",
  };

  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}

          <div className="hero-started">
            <div className="slide">
            {data.avatar?<img src={data.avatar.url} width={400} alt={data.avatar.public_id} />:""}
              
               <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="500px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span> 
            </div>

            <div className="content">
              <div className="titles">
                <div className="subtitle" style={{ fontSize: "50px" }}>
                  {data.name}
                </div>
                <h3 className="title" style={{ fontSize: "100px" }}>
                  {data.title}
                </h3>
              </div>
              <div className="description">
                <p>{data.subTitle}</p>
                <div className="social-links">
                  {social.map(
                    (soc_handle) => (
                      <a href={soc_handle.url}>
                        <img src={soc_handle.image.url} width={25} />
                      </a>
                    ),

                    {
                      /*                   
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-dribbble" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-behance" />
                  </a> */
                    }
                  )}
                </div>
              </div>
            </div>
            {/* Info List */}
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>{data.address}</strong>
                </li>
                <li>
                  Experience <strong>{data.exp_year}+years</strong>
                </li>
                {data.dob ? (
                  <li>
                    Date of Birth <strong>{data.dob}</strong>
                  </li>
                ) : (
                  <li>
                    Phone<strong>{data.phoneNumber}</strong>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">About Me</h2>
            
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
              {data.avatar?<img src={data.avatar.url}  width={120} style={{borderRadius:"15rem"}}/>:''}
                <div className="numbers-item">
               
                  <div className="icon">
                  
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">{data.some_total}</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                {/* Checked total clients served if Available */}
                {data.clients_served ? (
                  <div className="numbers-item">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-smile-beam" />
                    </div>
                    <div className="num">{data.clients_served}</div>
                    <div className="title">
                      Happy <br />
                      Clients
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {/* Checked total awarads won if Available */}
                {data.awards_won ? (
                  <div className="numbers-item">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-gem" />
                    </div>
                    <div className="num">{data.awards_won}</div>
                    <div className="title">
                      Awards <br />
                      Won
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div className="text">
                  <p>{data.description}</p>
                  <a href="#contact-section" className="btn">
                    <span>Contact Me</span>
                  </a>
                  <div className="signature">
                    <img src={data.signatureurl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Resume</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>{data.description}</p>
              </div>
              {/* Skills */}
              <div className="skills-items" >
                <div className="p-title">SKILLS</div>
                {skills.sort((a, b) => a.sequence - b.sequence) &&
                  skills.map((skill) => (
                    <div className="skills-item"style={{border:"2px solid #ff8059",borderRadius:"40px",padding:"20px"}}>
                      {/* ProgressBar */}
                      <div className="name">
                        <div style={mainDiv}>
                          {skill.name}
                          <img src={skill.image.url} width={50} height={50} />
                          <ProgressBar
                            completed={skill.percentage}
                            bgColor="#ff8059"
                            animateOnRender={true}
                          />

                          <br></br>
                        </div>
                      </div>
                      {/* Data not needed might delete */}
                      {/* <div className="dots dots-90">
                  <div className="dots-row">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                </div> */}

                      {/* <div className="value">
                  
                </div> */}
                    </div>
                  ))}

                {/* <div
                  className="skills-item"
                >
                  <div className="name">WordPress</div>
                  <div className="dots dots-60">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">60%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">HTML</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">Java</div>
                  <div className="dots dots-50">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">50%</span>
                  </div>
                </div>
                <div
                  className="skills-item"
                >
                  <div className="name">jQuery</div>
                  <div className="dots dots-70">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">70%</span>
                  </div>
                </div> */}
              </div>
              {/* Services */}
              
              <div className="p-title">SERVICES</div>
              <div className="services-row" > 
              <div className="services-items" style={{display: "flex",flexDirection:"coloumn"}}>
                <div className="col-lg-6 mb-4" >
                  {services.map((service) => (
                    <div className="services-item" style={{border:"3px solid #ff8059",borderRadius:"10px",padding:"20px", marginBottom:"10px"}}>
                      <div className="icon"style={{display:"flex", flexDirection:"column"}} width={60}>
                      <img src={service.image.url} />
                      </div>
                    

                     
                      <div className="title">{service.name}</div>
                      <div className="text"style={{display:"flex", flexDirection:"column"}}>
                        <p>{service.desc}</p>
                        <strong>Price:{service.charge}</strong>
                      </div>
                      <a href="#contact-section" className="lnk">
                        order now
                      </a>
                    </div>
                  ))}
                </div>
               
                </div>
                </div>
             
                
                {/* <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-soundcloud" />
                    </div>
                    <div className="title">Music writing</div>
                    <div className="text">
                      <p>
                        Music copying, writing, creating, transcription and
                        composition services.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-adversal" />
                    </div>
                    <div className="title">Advetising</div>
                    <div className="text">
                      <p>
                        Advertising services include television, radio, print,
                        mail, and web apps.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div
                    className="services-item"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="fas fa-gamepad" />
                    </div>
                    <div className="title">Game Development</div>
                    <div className="text">
                      <p>
                        Developing memorable and unique mobile android, ios and
                        video games.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div> */}
              
              {/* History */}
              <div  >
              <div className="history-left">
                <div className="p-title">EDUCATION</div>
                {timeline.sort((a, b) => a.sequence - b.sequence) &&
                  timeline.map((educ) => (
                    <div className="history-items">
                      <div className="history-item">
                        <div className="date">
                          {new Date(educ.startDate).toLocaleDateString()}-
                          {new Date(educ.endDate).toLocaleDateString()}
                        </div>

                        <div className="name">{educ.company_name}</div>
                        <div className="subname">{educ.jobTitle}</div>
                        {educ.summary ? (
                          <p>{educ.summary}</p>
                        ) : (
                          <p>{educ.bulletPoints}</p>
                        )}
                      </div>
                    </div>
                  ))}
                {/* Checked if awards is avialable in timeline section */}
                {timeline.awards ? (
                  <div className="history-items">
                    <div className="p-title">AWARDS</div>
                    <div className="history-item">
                      <div className="date">2016 - awwwards</div>
                      <div className="name">Site of the Day</div>
                      <div className="text">
                        <p>
                          Euismod vel bibendum ultrices, fringilla vel eros,
                          donec euismod leo lectus.
                        </p>
                      </div>
                    </div>
                    <div className="history-item">
                      <div className="date">2015 - designnominees</div>
                      <div className="name">Site of the Week</div>
                      <div className="text">
                        <p>
                          Euismod vel bibendum ultrices, fringilla vel eros,
                          donec euismod leo lectus.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* Experience */}
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  {experience.sort((a, b) => a.sequence - b.sequence) &&
                    experience.map((exp) => (
                      <div className="history-item" >
                        <div className="date">
                          {new Date(exp.startDate).toLocaleDateString()}-
                          {new Date(exp.endDate).toLocaleDateString()}
                        </div>
                        <div className="name">{exp.company_name}</div>
                        <div className="subname">{exp.jobTitle}</div>
                        <div className="text">
                          {exp.summary ? (
                            <p>{exp.summary}</p>
                          ) : (
                            <p>{exp.bulletPoints}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  {/* Data not needed might delete */}
                  {/* <div className="history-item">
                    <div className="date">2010 - 2014</div>
                    <div className="name">Kana Design Studio</div>
                    <div className="subname">UI / UX Specialist</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">2009 - 2010</div>
                    <div className="name">Paperart</div>
                    <div className="subname">Graphic Designer</div>
                    <div className="text">
                      <p>
                        Euismod vel bibendum ultrices, fringilla vel eros, donec
                        euismod leo lectus.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Projects</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      {data.pricing_plans? <section className="section" id="pricing-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">Pricing Plans</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  Are you interested to work with me ? Here are my price list
                  for design related work. Lets talk about project !
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div className="pricing-items row">
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="pricing-item">
                <div className="title">Full Time</div>
                <div className="subtitle">Available for Full Time</div>
                <div className="price">$1200</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="pricing-item">
                <div className="title">Project Wise</div>
                <div className="subtitle">Available for Freelancing</div>
                <div className="price">$400</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="pricing-item">
                <div className="title">Hourley</div>
                <div className="subtitle">Available for Hourley Basis</div>
                <div className="price">$60</div>
                <div className="text">
                  <ul>
                    <li>Brand Design</li> <li>Advertising</li>
                    <li>Web Development</li> <li>Photography</li>
                  </ul>
                </div>
                <a href="#contact-section" className="btn">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>:""}
     
      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container" style={{paddingTop:"100px"}}>
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
      {data.blog?<section className="section section-bg" id="blog-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Blog</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog-items">
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog4.jpg"
                    alt="Usability Secrets to Create Better User Interfaces"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div className="category">
                UI Design
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className="title">
                <Link href="/blog-single">
                  <a>Usability Secrets to Create Better User Interfaces</a>
                </Link>
              </h3>
              <div className="text">
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog3.jpg"
                    alt="Three Ways To Level Up Your Photography"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div className="category">
                Branding
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className="title">
                <Link href="/blog-single">
                  <a>Three Ways To Level Up Your Photography</a>
                </Link>
              </h3>
              <div className="text">
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/single7.jpg"
                    alt="10 Useful Tips to Improve Your UI Designs"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div className="category">
                Photography
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className="title">
                <Link href="/blog-single">
                  <a>10 Useful Tips to Improve Your UI Designs</a>
                </Link>
              </h3>
              <div className="text">
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-more-link">
          <Link href="/blog">
            <a className="btn">
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>:""}
      {data.clients_served?
      <section className="section section-parallax section-parallax-5">
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">My Clients</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Description */}
            <div className="text">
              <p>
                Suspendisse potenti. Sed egestas eros eu libero posuere
                ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
              </p>
            </div>
          </div>
        </div>
        <div className="row clients-items">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand1.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand2.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand3.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>:""}
      
      <ContactForm />
    </Layout>
  );
};
export default Index;

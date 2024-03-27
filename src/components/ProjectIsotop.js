import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
const ProjectIsotop = () => {
  //Api fetch
  const url =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
  const [data, setData] = useState([]);
  // Fetching enabled projects
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.user.projects.filter((item) => item.enabled)));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  // useEffect(() => {
  //   if (isotope.current) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` }):""
  //       // : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <div className="works-box">
      {/* Not required might delete */}

      {/* <div
          className="filter-links"
        >
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          {/* <a
            className={`c-pointer ${activeBtn("sorting-ui-ux-design")}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            UI UX Design
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            Photography
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-development")}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-branding")}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a> */}
      {/* </div> */}
      {/* projects */}
      {data.sort((a, b) => a.sequence - b.sequence) &&
        data.map((project) => (
          <div className="proj-container" style={{ display: "flex" }}>
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <Link href={`/work-single/`}>
                  <a>
                    <span
                      className="image"
                      style={{ display: "flex", flexDirection: "coloumn" }}
                    >
                      <span
                        className="img"
                        style={{
                          display: "flex",
                          flexDirection: "coloumn",
                        }}
                      >
                        <img
                          src={project.image.url}
                          alt={project}
                          style={{
                            display: "flex",
                            flexDirection: "coloumn",
                          }}
                          width={"40%"}
                          height={500}
                        />
                        <span className="overlay" />
                      </span>
                    </span>
                    <path
                      d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039"
                      fill="#ffffff"
                      fillOpacity={1}
                    />
                    <span className="desc">
                      <span
                        style={{
                          color: "black",
                          fontFamily: "Sorts Mill Goudy",
                          fontSize: "50px",
                        }}
                      >
                       
                          
                        <span style={{ fontSize: "20px" }}>Technology:</span>

                        <span style={{ fontSize: "20px" }}>
                          {project.techStack}{" "}
                        </span>
                      </span>

                      <span className="category">
                        {/* <a href={project.liveurl}>
                            <img src="/assets/images/network.png" width={40}style={{marginLeft:"500px",marginTop:"0px"}} />
                           
                          </a> */}

                        {/* <a href={project.githuburl}>
                            {/* <img
                              src="/assets/images/github-sign.png"
                              width={40}
                            style={{marginLeft:"8px",marginBottom:"0"}}/> */}

                        {/* </a> */}
                        <br />
                        {/* {project.description}
                          TechStack:
                          {project.techStack} */}
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            ,
            {/* <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/work2.jpg" alt="Gooir" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Gooir
                    </span>
                    <span
                      className="category"
                    >
                      Branding
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          // <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
          //   <div className="works-item">
          //     <Link href="/work-single">
          //       <a>
          //         <span
          //           className="image"
          //         >
          //           <span className="img">
          //             <img src="assets/images/work7.jpg" alt="Explore" />
          //             <span className="overlay" />
          //           </span>
          //         </span>
          //         <span className="desc">
          //           <span
          //             className="name"
          //           >
          //             Explore
          //           </span>
          //           <span
          //             className="category"
          //           >
          //             Development
          //             <br />
          //             UI UX Design
          //           </span>
          //         </span>
          //       </a>
          //     </Link>
          //   </div>
          // </div>
          // <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
          //   <div className="works-item">
          //     <Link href="/work-single">
          //       <a>
          //         <span
          //           className="image"
          //         >
          //           <span className="img">
          //             <img src="assets/images/work1.jpg" alt="Mozar" />
          //             <span className="overlay" />
          //           </span>
          //         </span>
          //         <span className="desc">
          //           <span
          //             className="name"
          //           >
          //             Mozar
          //           </span>
          //           <span
          //             className="category"
          //           >
          //             Branding
          //             <br />
          //             Photography
          //           </span>
          //         </span>
          //       </a>
          //     </Link>
          //   </div>
          // </div>
          // <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
          //   <div className="works-item">
          //     <Link href="/work-single">
          //       <a>
          //         <span
          //           className="image"
          //         >
          //           <span className="img">
          //             <img src="assets/images/single8.jpg" alt="Stay Fit" />
          //             <span className="overlay" />
          //           </span>
          //         </span>
          //         <span className="desc">
          //           <span
          //             className="name"
          //           >
          //             Stay Fit
          //           </span>
          //           <span
          //             className="category"
          //           >
          //             Development
          //             <br />
          //             UI UX Design
          //           </span>
          //         </span>
          //       </a>
          //     </Link>
          //   </div>
          // </div>
          // <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
          //   <div className="works-item">
          //     <Link href="/work-single">
          //       <a>
          //         <span
          //           className="image"
          //         >
          //           <span className="img">
          //             <img src="assets/images/single6.jpg" alt="Kana" />
          //             <span className="overlay" />
          //           </span>
          //         </span>
          //         <span className="desc">
          //           <span
          //             className="name"
          //           >
          //             Kana
          //           </span>
          //           <span
          //             className="category"
          //           >
          //             Development
          //             <br />
          //             Photography
          //           </span>
          //         </span>
          //       </a>
          //     </Link>
          //   </div>
          // </div> */}
          </div>
        ))}
    </div>
  );
};
export default ProjectIsotop;

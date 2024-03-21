import Layout from "../src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WorkSingleIsotope = dynamic(
  () => import("../src/components/WorkSingleIsotope"),
  {
    ssr: false,
  }
);

const WorkSingle = () => {
  let { id } = useParams();
  const url =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
  const [data, setData] = useState([]);

  // Fetching enabled projects
  async function fetchInfo() {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.user.projects));
  }

  useEffect(() => {
    fetchInfo();
    console.log(id);
  }, []);
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout extraWrapClass={"project-single"}>
      <div className="h-titles" style={{ paddingTop: "10rem" }}>
        <h1 className="h-title">Project details:</h1>
      </div>
      {/* Section Started Heading */},
      <section className="section section-inner started-heading">
        <div className="container" >
          {data.sort((a, b) => a.sequence - b.sequence) &&
            data.map((item, index) => (
              <div className="row" style={{ paddingBottom: "120px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* <img src={project.image.url}/> */}
                  {/* titles */}
                  <div className="h-titles">
                    <h1 className="h-title">{item.title}</h1>
                  </div>
                  <div className="image">
                    <img src={item.image.url} width={1000} />
                  </div>
                  <div className="details-label"style={{paddingTop:"10px"}}>
                    {item.desc?<p>{item.desc}</p>:""}
                    <span style={{fontSize:"40px"}}>Technology:</span>

                    <span style={{fontSize:"40px"}}>{item.techStack}  </span>
                   <br></br>
                    <a href={item.liveurl}>
                      <img
                        src="/assets/images/network.png"
                        width={40}
                        style={{ marginLeft: "8px"}}
                      />Link
                    </a>
                      <br></br>
                    <a href={item.githuburl}>
                      <img
                        src="/assets/images/github-sign.png"
                        width={40}
                        style={{ marginLeft: "8px", marginBottom: "0" }}
                      />Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      
    </Layout>
  );
};
export default WorkSingle;

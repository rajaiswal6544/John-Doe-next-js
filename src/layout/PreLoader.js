import { Fragment, useEffect,useState } from "react";
const PreLoader = () => {
  const[data,setData]=useState({});
  const url =
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
    async function fetchInfo  () {
      return await fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d.user.about));
    };
  
    useEffect(() => {
      fetchInfo();
    },[])
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloader").classList.add("loaded");
      document.querySelector(".centrize").style.display = "none";
    }, 1000);
  }, []);

  return (
    <Fragment>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            {/* <div className="spinner-logo"> */}
              <strong>{data.name}</strong>
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;

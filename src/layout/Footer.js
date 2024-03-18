import React, { useEffect, useState } from "react";

const Footer = () => {
  const url='https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
  const [data, setData] = useState([])
  const [user,setuser]=useState({})
  const fetchInfo = () => { 
    return fetch(url) 
            .then((res) => res.json()) 
            .then((d) => setData(d.user.social_handles)) 
    }
    
    useEffect(() => {
      fetchInfo();
      fetch(url)
      .then(response => response.json())
      .then((result)=>setuser(result.user.about));  
    }, [])
  return (
    <div className="footer">
      
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
            
              {/* social */}
              <div
                className="social-links"
              >
                {data.map(social=>
                <a href={social.url}><img src={social.image.url} width={25}/></a>
                
                ,{/* <a target="_blank" rel="noreferrer" href="http://dribble.com">
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a target="_blank" rel="noreferrer" href="http://behance.com">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a> */}
                )}
                </div>
            
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
              <div
                className="copyright-text"
              >
                © 2024 {user.name}. All Rights Reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text"
              >
                Developed by <strong>{user.name}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};
export default Footer;

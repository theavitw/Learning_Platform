import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import "./Explore.css";
import axios from "axios";
import { useEffect } from "react";

const AdvancedCarousel = () => {
  const [data, setData] = React.useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:8080/getdata")
      .then((res) => {
        JSON.stringify(res.data);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { scrollRef, next, prev  } = useSnapCarousel();

  return ( 
    <>
      {data.map((item, index) => {
        
        return(
      <>
      <h1
      style={{
      
        
        fontSize: "50px",
        margin: "8% 0 0 2%",
        
        
        
        }
      }
      >{item.title}</h1>
      <div
        style={{
          display: "flex",

          padding: "0",

          flexDirection: "column",
        }}
      >
        <div>
          <button onClick={() => next()} className="btk">
            {">"}
          </button>
          <button onClick={() => prev()} className="btk">
            {"<"}
          </button>
        </div>

        <ul
          ref={scrollRef}
          style={{ 
            display: "flex",
            overflow: "hidden",
            padding: "0",
            margin: "0",
            listStyle: "none",

          }}
          id={index}
        >
          {item.courses.map((item1, index) => {
            // console.log(item1)
            return (
              <li
                style={{
                  fontSize: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
                
              >
                {
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      margin: "10px 10px 10px 0px",
                      padding: "0",

                      border: "none",
                      boxShadow: "none",
                      borderRadius: "0px",
                    }}
                  >
                    <img
                      src={item1.url}
                      className="card-img-top "
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item1.Asset_Title}</h5>
                      <h5 className="card-title">
                        {item1.Date.split("T")[0]}
                      </h5>
                      <h5 className="card-title">{item1.Asset_type}</h5>

                      <h5 className="card-title">{item1.FileType}</h5>
                    </div>
                  </div>
                }
              </li>
            );
          })}
          
        </ul>
        
      </div>
      
      </>)
      })}
    </>
  );
};

export default AdvancedCarousel;

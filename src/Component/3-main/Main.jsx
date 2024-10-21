import { useState } from "react";
import "./main.css";

const workFlow =[
  { projecttitle:"project" ,category:"react" ,imgPath:"./public/image/card1.jpg" },
  { projecttitle:"onProgres" ,category:"java" ,imgPath:"public/image/card2.jpg" },
  { projecttitle:"OnderRevew" ,category:"html" ,imgPath:"public/image/card3.jpg" },
  { projecttitle:"getApproval" ,category:"css" ,imgPath:"./public/image/card4.jpg" },

]
const Main = () => {
  const[currentActive,setActive] =useState("all");
  const[array,setArray] =useState(workFlow);


  return (
    <div className="Container">
      <section className="section-2 ">
        <div>
          <h1 className="title-section ">How does it Works?</h1>
          <p className="text-section1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eos,
            quam vitae, numquam totam et ratione ab facere itaque voluptatum ut
            tenetur est eaque assumenda debitis magni ducimus vero dolorem.
          </p>
        </div>
      </section>
      <main className="flex">
        <section className=" flex left-section">
          <button onClick={() => { 
            setActive("java");
            const newArr =workFlow.filter((item) => {
              return item.category==="java"
            })
            setArray(newArr)
           }} className={currentActive==="java" ? "active" : null}>On_Progress</button>
          <button 
        onClick={() => {
          setActive("react");
          const newArr =workFlow.filter((item) => {
            return item.category==="react"
          })
          setArray(newArr)
      
        }}  className={ currentActive==="react"? "active" : null}>progects</button>
  
        <button    onClick={() => {
          setActive("html");
          const newArr =workFlow.filter((item) => {
            return item.category==="html"
          })
          setArray(newArr)
        
        }}  className={ currentActive==="html"? "active" : null}>UnderReview</button>
          <button    onClick={() => {
          setActive("css");
          const newArr =workFlow.filter((item) => {
            return item.category==="css"
          })
          setArray(newArr)
      
        }}  className={ currentActive==="css"? "active" : null}>GetApproval</button>
    
        </section>
        <section className=" flex right-section ">
          {array.map((item) => {
            return (
              <article key={item .imgPath} className=" card">
                <img
                  width={270}
                  src={item.imgPath}
                  alt=""
                />
                <div className="box" style={{ width: "270px" }}>
                  <h1 className="title-box">{item.projecttitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, nihil commodi in deserunt ullam sit possimus optio
                    error minus ea velit at illo asperiores voluptates alias
                    facere placeat, id omnis!
                  </p>
                  <div className="flex icon">
                    <div />
                    <div />
                    <a className="link flex">
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-long-right"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Main;

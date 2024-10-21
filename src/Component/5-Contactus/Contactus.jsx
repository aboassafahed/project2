import "./contactus.css";
import Lottie from "lottie-react";
import Animation from "../../../public/animation/Animation.json";

const Contactus = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact Us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel
        expedita amet nesciunt mollitia doloremque voluptate architecto.{" "}
      </p>

      <div  style={{justifyContent:"space-between"}} className="flex">
        <form className="">
          <div  className="flex" >
            <label htmlFor="email"> Email Address</label>
            <input required type="email" name="" id="email" />
          </div>
          <div  className="flex" style={{marginTop:"25px"}}>
            <label htmlFor="message"> Your Message</label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>{" "}
        </form>
        <div className="animation">
          <Lottie 
          className="animation-contact"
        
          style={{height:300,width:300}}
          animationData={Animation}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Contactus;

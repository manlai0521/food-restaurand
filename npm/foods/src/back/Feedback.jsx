import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./feedback.css";


export default function Feedback () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_94ohtb5",
     "template_84s83wd", 
     form.current, 
     "5puzLHPn6bMSYQmQ4")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return(
    <section>
      <div className="container"> 
        <h2 className="--text-center">Санал хүсэлт
        </h2>
        <div className="form-group">
        <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
          <input type="text" placeholder="Нэр" name="user_name" required /> 
          <input type="email" placeholder="Имайл" name="user_email" required />
          <input type="text" placeholder="s17ud1109015@nmit.edu.mn"  name="subject" required /> 
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn--btn-primary" >Илгээх</button>
        
        </form>
        </div>
      </div>

    </section>



  )
}
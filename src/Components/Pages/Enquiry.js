import React, { useRef } from "react";

import "./Enquiry.css";
const Enquiry = () => {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const phnoRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const Contacts = {
      name: nameRef.current.value,
      email: mailRef.current.value,
      phno: phnoRef.current.value,
    };
    const response = await fetch(
      "https://task-1aa52-default-rtdb.firebaseio.com/Contacts.json",
      {
        method: "POST",
        body: JSON.stringify(Contacts),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    alert("Response successfully saved");
  }
  return (
    <React.Fragment>
      <div className="details" id="enquire">
        <form onSubmit={submitHandler}>
          <h3 className="tilte_page">CONTACT US</h3>
          <div className="control">
            <input type="text" placeholder="Enter name" ref={nameRef} />
          </div>
          <div className="control">
            <input type="email" placeholder="Enter email" ref={mailRef} />
          </div>
          <div className="control">
            <input type="number" placeholder="Enter Ph.No" ref={phnoRef} />
          </div>
          <button className="submit_button">SUBMIT</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Enquiry;

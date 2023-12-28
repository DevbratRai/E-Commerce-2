import React from "react";
import { useRef } from "react";

const ContactUs = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    props.onAddData(data);
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "left",
  };
  const inputStyle = {
    display: "block",
    width: "100%",
    font: "inherit",
    padding: "0.2rem",
    borderRadius: "12px",
    border: "1px solid #ccc",
  };
  return (
    <form
      style={{
        display: "block",
        margin: "20px",
        width: "50%",
        alignContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
      onSubmit={submitHandler}
    >
      <div>
        <label style={labelStyle} htmlFor="name">
          Name
        </label>
        <input style={inputStyle} type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="email">
          Email
        </label>
        <input style={inputStyle} type="email" id="eamil" ref={emailRef} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="phone">
          Phone No
        </label>
        <input style={inputStyle} type="number" id="number" ref={phoneRef} />
      </div>
      <button style={{ margin: "10px" }}>submit</button>
    </form>
  );
};

export default ContactUs;

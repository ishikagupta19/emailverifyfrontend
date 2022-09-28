import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./emailverify.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { TiLocationArrowOutline} from "react-icons/ti";
import {AiOutlineRight} from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  return (
    <>
    <div className="container1">
      <TiLocationArrowOutline
        className="icon"
        style={{
          fontSize: 100,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          left: "40%",
          top: "15%",
          color:"black"
        }}
      ></TiLocationArrowOutline>
      <div className="text1">
        <h3>An email has been sent to you.</h3>
        <p>Check the email that's associated with your account for the verification code</p>
        <br/>
        <h6 style={{alignItems:"left", display:"flex"}}>Verification Code</h6>
        <InputGroup className="mb-3 input">
        
        <Form.Control
          placeholder="Code"
          aria-label="Code"
          aria-describedby="basic-addon1"
          
        />
      </InputGroup>
      </div>
     
      <button className="box">Verify</button>
      <div className="skip">
      <Link
            style={{
              textDecoration: "none",
            }}
          >
            Skip for now <AiOutlineRight></AiOutlineRight>
          
      </Link>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <br/>
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && <span>Invalid email</span>}

        <input type="submit" />
      </form> */}
    </div>
    
    </>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import "./emailverify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiMessageAltError } from "react-icons/bi";

import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

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
        <BiMessageAltError
          className="icon"
          style={{
            fontSize: 100,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            left: "40%",
            top: "15%",
            color: "black",
          }}
        ></BiMessageAltError>
        <div className="text1">
          <h3>Your email has not been verified.</h3>
          <p>Send a verification code to example@name.com</p>
        </div>

        <Link
          className="box"
          to="/verifiedemail"
          style={{
            textDecoration: "none",
          }}
        >
          {" "}
          <p>Send verification Mail</p>{" "}
        </Link>
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

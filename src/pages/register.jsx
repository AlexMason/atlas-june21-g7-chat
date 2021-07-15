import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "tailwind-styled-components";
import TestLayout from "../layouts/testlayout";

export default function Register() {
  const RegisterUser = tw.div`relative m-6 px-5 bg-coolgray-300 text-cwhite shadow-lg rounded-3xl max-w-sm sm:max-w-md md:max-w-none`;
  const Logo = tw.div`bg-cblue text-cwhite`;
  const FormField = tw.div`py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 max-w-lg object-center`;
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [submit, setSubmit] = useState(false);


  useEffect(() => {
    if (submit) {
      registerUser();
    }
  });

  const showPassword = () => {
    let pw = document.getElementById("password");
    if (pw.type === "password") {
      pw.type = "text";
    } else {
      pw.type = "password";
    }
  };

  const submitBtn = () => {
    let btn = document.getElementById("submit");
    if (btn.type === "password") {
      btn.type = "text";
    } else {
      btn.type = "password";
    }
  };

  const registerUser = () => {
    fetch(`.../user/register`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status != 200) {
          console.log("error");
        } else {
          //send user to home page
          console.log("Success");
          setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            username: "",
            submit: false,
          });
        }
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <TestLayout>
      <RegisterUser>
        <div>
          <Logo>Logo will go here</Logo>
          <FormField>
            <p>Sign Up Below</p>
            <form onSubmit={() => setSubmit(true)}>
              <div className="inline-block">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  // autoComplete="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  minLength="3"
                  className="p-2 mx-4 my-2 rounded-xl"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  minLength="3"
                  className="p-2 mx-4 my-2 rounded-xl"
                  // autoComplete="lastName"
                  required
                />
              </div>
              <div className="inline-block">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  minLength="11"
                  className="p-2 mx-4 my-2 rounded-xl"
                  pattern="/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // autoComplete="email"
                  required
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  minLength="5"
                  className="p-2 mx-4 my-2 rounded-xl"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // autoComplete="username"
                  required
                />
              </div>
              <div className="inline-block">
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  className="p-2 mx-4 my-2 rounded-xl"
                  pattern="[a-z]{4,8}[0-9]{4}"
                  placeholder="Secret1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // autoComplete="password"
                  required
                />
                <label htmlFor="cbox">
                  <input
                    type="checkbox"
                    placeholder="Show Password"
                    onClick={() => showPassword()}
                  />
                  <span>Show Password</span>
                </label>
              </div>
              <ReCAPTCHA sitekey={siteKey} onChange={() => submitBtn()} />
              <br />
              <button
                type="submit"
                id="submit"
                className="bg-cnavy text-cwhite rounded-xl m-5 px-2 py-1"
              >
                Register
              </button>
            </form>
          </FormField>
        </div>
      </RegisterUser>
    </TestLayout>
  );
}

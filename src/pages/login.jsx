import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "tailwind-styled-components";

export default function Login() {
  const LoginUser = tw.div`relative m-6 px-5 bg-coolgray-300 text-cwhite shadow-lg rounded-3xl max-w-sm sm:max-w-md md:max-w-none`;
  const Logo = tw.div`bg-cblue text-cwhite`;
  const FormField = tw.div`py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 max-w-lg object-center`;
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      loginUser();
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

  const loginUser = () => {
    let fetchBody = {
      username,
      password,
    };

    fetch(".../user/login", {
      method: "POST",
      body: JSON.stringify(fetchBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status != 200) {
          console.log("Invalid username or password.");
        } else {
          //send to home
        }
        return res.json();
      })
      .then((res) => {
        //handle token validation
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <MainLayout>
      <LoginUser>
        <div>
          <Logo>Logo will go here</Logo>
          <FormField>
            <p>Login Below</p>
            <form onSubmit={() => setSubmit(true)}>
              <div class="inline-block">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  minLength="5"
                  class="p-2 mx-4 my-2 rounded-xl"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // autoComplete="username"
                  required
                />
              </div>
              <div class="inline-block">
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  class="p-2 mx-4 my-2 rounded-xl"
                  pattern="[a-z]{4,8}[0-9]{4}"
                  placeholder="Secret1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // autoComplete="password"
                  required
                />
                <label for="cbox">
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
                class="bg-cnavy text-cwhite rounded-xl m-5 px-2 py-1"
              >
                Login
              </button>
            </form>
          </FormField>
        </div>
      </LoginUser>
    </MainLayout>
  );
}

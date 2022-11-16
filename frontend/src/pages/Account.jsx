import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Account.css";

function Account() {
  const [signIn, setSignIn] = useState(false);
  const [btnSubscribe, setBtnSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const signInUserAlert = () => {
    toast.success(`Connection successful : now watch movies !`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="container col-md-6 col-lg-6 p-0">
      <div className="sign-stream m-3 mb-1">
        <h2 className="fw-bold mb-2 mt-3">Sign In</h2>
        <div className="d-flex justify-content-center">
          <p className="advice-streamwood text-center m-1">
            Please enter your email and password ! 🌳
          </p>
        </div>
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            <div className="form-outline form-white mb-4 col-11 col-lg-6">
              <input
                type="email"
                id="emailSignIn"
                className="form-control border"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {email === "" && (
                <label className="form-label" htmlFor="emailSignIn">
                  Email
                </label>
              )}
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="form-outline form-white col-11 col-lg-6">
              <input
                type="password"
                id="passwordSignIn"
                className="form-control border"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              {password === "" && (
                <label className="form-label" htmlFor="passwordSignIn">
                  Password
                </label>
              )}
            </div>
          </div>
        </div>
        <button
          className="btn-stream-signin btn-outline-light mb-4 text-uppercase"
          type="submit"
          onClick={() => signInUserAlert()}
        >
          Log In
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <p className="btn-streamwood-before-signup d-flex justify-content-center align-items-center col-9">
          Don't have an account ?
          <button
            type="button"
            className="btn-streamwood-signup d-flex justify-content-center align-items-center m-0 col-3"
            onClick={() => setSignIn(!signIn)}
          >
            Sign Up
          </button>
        </p>
      </div>

      {signIn && (
        <div>
          <div className="sign-stream m-3">
            <h2 className="fw-bold mb-1 mt-3">Sign Up</h2>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                <div className="form-outline form-white mb-4 col-11 col-lg-6">
                  <input
                    type="text"
                    id="namestreamwood"
                    className="form-control border form-control-lg"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  {name === "" && (
                    <label className="form-label" htmlFor="namestreamwood">
                      Your Name
                    </label>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="form-outline form-white mb-4 col-11 col-lg-6">
                  <input
                    type="email"
                    id="emailstreamwood"
                    className="form-control border form-control-lg"
                    value={newEmail}
                    onChange={(event) => setNewEmail(event.target.value)}
                  />
                  {newEmail === "" && (
                    <label className="form-label" htmlFor="emailstreamwood">
                      Your Email
                    </label>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="form-outline form-white mb-4 col-11 col-lg-6">
                  <input
                    type="password"
                    id="passwordstreamwood"
                    className="form-control border form-control-lg"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                  />
                  {newPassword === "" && (
                    <label className="form-label" htmlFor="passwordstreamwood">
                      Password
                    </label>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="form-outline form-white mb-4 col-11 col-lg-6">
                  <input
                    type="password"
                    id="repeatstreamwood"
                    className="form-control border form-control-lg"
                    value={validatePassword}
                    onChange={(event) =>
                      setValidatePassword(event.target.value)
                    }
                  />
                  {validatePassword === "" && (
                    <label className="form-label" htmlFor="repeatstreamwood">
                      Repeat your password
                    </label>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="form-check d-flex justify-content-center mb-3 col-11 col-lg-6">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="valid-streamwood"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="valid-streamwood"
                  >
                    I agree all statements in terms of service.
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn-stream-signin btn-outline-light text-uppercase"
                  onClick={() => setBtnSubscribe(!btnSubscribe)}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {btnSubscribe && (
            <div className="sign-stream m-3">
              <h2 className="fw-bold mb-2 mt-3">Subscribe</h2>
              <div className="d-flex flex-column align-items-center">
                <div className="form-check d-flex flex-column justify-content-center mb-3 col-11 col-lg-6 p-0">
                  <div className="form-check mt-2 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="firstmonth"
                    />
                    <label className="form-check-label" htmlFor="firstmonth">
                      11,99$ / months, no commitments 🌱
                    </label>
                  </div>
                  <div className="form-check mt-2 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="threemonths"
                    />
                    <label className="form-check-label" htmlFor="threemonths">
                      10,99$ / months, over 3 months 🌲
                    </label>
                  </div>
                  <div className="form-check mt-2 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="oneyear"
                    />
                    <label className="form-check-label" htmlFor="oneyear">
                      8,99$ / months, over 12 months 🌳
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-stream-signin btn-outline-light mb-3 text-uppercase"
                >
                  Validate ✔
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Account;

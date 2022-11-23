import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import updateMeta from "@services/Meta";
import { useNavigate } from "react-router-dom";
import { MDBRadio } from "mdb-react-ui-kit";
import "./Account.css";

function Account({ setConnected }) {
  const [signIn, setSignIn] = useState(false);
  const [btnSubscribe, setBtnSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const navigate = useNavigate();

  const signInUserAlert = () => {
    toast.success(`Connection successful : now watch movies !`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const validateSignIn = () => {
    const sendFeedback = (serviceID, templateId, variables, publicKey) => {
      emailjs
        .send(serviceID, templateId, variables, publicKey)
        .then()
        .catch((err) => console.error("There has been an Error.", err));
    };
    const templateId = "template_0aduysb";
    const serviceID = "service_x1i40xc";
    const publicKey = "fsQWG3jp6V7MOxwtA";
    sendFeedback(
      serviceID,
      templateId,
      { from_name: name, email: newEmail },
      publicKey
    );
  };

  const handleConnection = (type) => {
    setTimeout(() => navigate("/"), 3000);
    signInUserAlert();
    if (type === "SignIn") {
      validateSignIn();
    }
    setConnected(true);
  };

  useEffect(() => {
    updateMeta("Account", "the account page");
  }, []);

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
          type="button"
          onClick={() => handleConnection("LogIn")}
        >
          Log In
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
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
                <MDBRadio
                  className="mb-3"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="11,99$ / months, no commitments 🌱"
                  defaultChecked
                />
                <MDBRadio
                  className="mb-3"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="10,99$ / months, over 3 months 🌲"
                />
                <MDBRadio
                  className="mb-3"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  label="8,99$ / months, over 12 months 🌳"
                />
                <button
                  type="button"
                  className="btn-stream-signin btn-outline-light mb-3 text-uppercase"
                  onClick={() => handleConnection("SignIn")}
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

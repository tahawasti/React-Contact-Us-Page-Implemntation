import React, { Component } from "react";

class ContactComp extends Component {
  state = {};
  render() {
    return (
      <div className="contact body">
        <p>For Development:</p>
        <p>Please contact me on shayan121@hotmail.com</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="text-orange ">
                <h2 className="display-4">
                  Do you have any project in your mind?
                </h2>
              </div>
              <br />
              <p>
                Share the details of your project – like scope, timeframes, or
                business challenges you'd like to solve. Our team will carefully
                study them and then we’ll figure out the next move together
              </p>
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-7 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label htmlFor="firstName1"></label>
                    <input
                      type="Default input"
                      className="form-control my-form"
                      id="firstName1"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailid"></label>
                    <input
                      type="email"
                      className="form-control my-form"
                      id="emailid"
                      placeholder="Enter Your Email ID"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label htmlFor="lastName1"></label>
                    <input
                      type="Default input"
                      className="form-control my-form"
                      id="lastName1"
                      placeholder="Enter Your Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber"></label>
                    <input
                      type="default input"
                      className="form-control my-form"
                      id="phoneNumber"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file my-form">
                  <input
                    type="file"
                    className="my-form"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    className="my-form"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Tell Us something About your Project
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree your Privacy Policy
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Send me NDA
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center my-3">
                <button type="submit" className="my-button">
                  Send Me an Email
                </button>
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-md-5 col-sm-12 text-orange">
              <h1 className="display-4">Always At your Service</h1>
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="display-4 text-orange">Project inquiries</div>
                  <p>Got an app idea? Tell us about it!</p>
                  <h5>hello@yalantis.com</h5>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h2 className="text-orange display-4">Careers</h2>
                  <p>We’re always looking for talent!</p>
                  <h5>hr@yalantis.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComp;

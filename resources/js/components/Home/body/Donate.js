import React, { Component } from "react";

class Donate extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="panel panel-primary">
            <div
              className="panel-heading"
              style={{ padding: "20px" }}
            >
              <h2 className="text-center">DONATE</h2>
            </div>
            <hr />
            <div className="panel-body">
              <label>Donor name</label>
              <div className="row">
                <div className="col-sm-6">
                  <label className="textdown"> First Name:</label>
                  <input
                    required="true"
                    type="text"
                    className="form-control"
                    id="usr"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="textdown">Last Name:</label>
                  <input
                    required="true"
                    type="text"
                    className="form-control"
                    id="usr"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label>Type of Donation</label>
                    <select className="form-control">
                      <option>Cash</option>
                      <option>Product/Item</option>
                      <option>Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label> Amount</label>
                    <input
                      required="true"
                      type="text"
                      className="form-control"
                      id="amount"
                      placeholder="$100 000"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="form-group">
                <div>
                  <label>Donor Notes</label>
                  <textarea
                    className="form-control"
                    id="w3review"
                    name="w3review"
                    rows={4}
                    cols={50}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  required="true"
                  type="text"
                  className="form-control"
                  id="comany_name"
                />
              </div>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="usr">Email:</label>
                  <input
                    required="true"
                    type="email"
                    className="form-control"
                    id="usr"
                    placeholder="youremail"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-3">
                      <label className="textdown">
                        Area Code
                      </label>
                      <input
                        required="true"
                        type="text"
                        className="form-control"
                        id="usr"
                      />
                    </div>
                    <div className="col-sm-9">
                      <label className="textdown">
                        Phone Number
                      </label>
                      <input
                        required="true"
                        type="text"
                        className="form-control"
                        id="usr"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="form-group">
                <label>Address</label>
                <div>
                  <input
                    required="true"
                    type="text"
                    className="form-control"
                    id="confirmation_pwd"
                  />
                  <label className="textdown"> Street Address</label>
                </div>
                <div>
                  <input
                    required="true"
                    type="text"
                    className="form-control"
                    id="confirmation_pwd"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label className="textdown"> City:</label>
                    <input
                      required="true"
                      type="text"
                      className="form-control"
                      id="usr"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="textdown">
                      Provice/State:
                    </label>
                    <input
                      required="true"
                      type="text"
                      className="form-control"
                      id="usr"
                    />
                  </div>
                </div>
                <label className="textdown">Postal/Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                />
              </div>
              <br />
              <center>
                <button className="btn btn-success">
                  Submit
                </button>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Donate;

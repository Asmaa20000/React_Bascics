import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Category extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li>
                <Link to="laptop">Laptop</Link>
              </li>
              <li>
              <Link to="mobile">Mobile</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
<Outlet/>
          </div>
        </div>
      </div>
    );
  }
}

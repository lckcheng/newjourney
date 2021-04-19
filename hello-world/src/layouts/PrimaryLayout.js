import React from "react"
import MyHeader from "../components/MyHeader"
import MyFooter from "../components/MyFooter"


const PrimaryLayout = props => (
  <div>
    <MyHeader></MyHeader>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className={props.column}>
            {props.children}
        </div>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
);

export default PrimaryLayout;

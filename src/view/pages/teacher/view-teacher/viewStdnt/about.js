import React, { useEffect, useState } from "react";
import { Tag } from "antd";
/**
 * @author
 * @function About
 **/
const About = (props) => {
const {dataDetails} = props
console.log("object");
  return (
    <div className={props.class}>
          <div className="info-details">
            <span>
              MSGV: {dataDetails ? dataDetails.msgv && dataDetails.msgv.length ? dataDetails.msgv :"Chưa cập nhật" : "Loading..."}
            </span>
          </div>
          <div className="info-details">
            <span>
              Họ Và Tên: {dataDetails ? dataDetails.name && dataDetails.name.length ? dataDetails.name :"Chưa cập nhật" : "Loading..."}
            </span>
          </div>
          <div className="info-details">
            <span>
              Tuổi: {dataDetails ? dataDetails.age ? dataDetails.age :"Chưa cập nhật" : "Loading..."}
            </span>
          </div>
          <div className="info-details">
            <span>
              Lớp: {dataDetails ? dataDetails.classes && dataDetails.classes.length ? dataDetails.classes.map((classes,index)=>{
                let color =
                classes.length > 10
                  ? "blue"
                  : classes === "CD19CNTT2"
                  ? "volcano"
                  : "green";
                return <Tag color={color} key={index}>{classes}</Tag>
              }) :"Chưa cập nhật" : "Loading..."}
            </span>
          </div>
          <div className="info-details">
            <span>
              Giới tính: {dataDetails ? dataDetails.gender && dataDetails.gender.length ? dataDetails.gender :"Chưa cập nhật" : "Loading..."}
            </span>
          </div>
    </div>
    
  );
};

export default About
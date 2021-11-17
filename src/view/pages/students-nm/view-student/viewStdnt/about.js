import React, { useEffect, useState } from "react";
import {Tag} from 'antd'
/**
 * @author
 * @function About
 **/

export const About = (props) => {
  const [infoData, setInfoData] = useState([
    {
      title: "MSSV",
      des: "loading...",
    },
    {
      title: "Tên đầy đủ",
      des: "loading...",
    },
    {
      title: "Tuổi",
      des: "loading...",
    },
    {
      title: "Lớp",
      des: ["loading..."],
    },
    {
      title: "Giới tính",
      des: "loading...",
    },
  ]);
  const {dataDetails} = props
  useEffect(()=>{
    if(dataDetails){
      setInfoData([
        {
          title: "MSSV",
          des: dataDetails.info?dataDetails.info.mssv:"Loading",
        },
        {
          title: "Tên đầy đủ",
          des: dataDetails?dataDetails.name:"Loading",
        },
        {
          title: "Tuổi",
          des: dataDetails?dataDetails.age:"Loading",
        },
        {
          title: "Lớp",
          des: dataDetails?dataDetails.classes:"Loading",
        },
        {
          title: "Giới tính",
          des: dataDetails?dataDetails.gender:"Loading",
        },
      ])
    }
  },[dataDetails])
  return (
    <div className={props.class}>
      {infoData.map((info) => {
        return (
          <div className="info-details">
            <span>{info.title}: {
            info.des && typeof info.des == "string" ? info.des && info.des:typeof info.des == "object" ? info.des.map((element)=>{
              let color = element.length > 10 ? "blue" : element == "CD19CNTT2" ? "volcano" : "green"
              return (
                <Tag color={color}>{element}</Tag>
              )
            }) : "Chưa cập nhật"
            }</span>
          </div>
        );
      })}
    </div>
  );
};



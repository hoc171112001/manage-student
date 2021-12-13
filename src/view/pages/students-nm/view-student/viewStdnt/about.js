import React, { useEffect, useState } from "react";
import { Tag } from "antd";
/**
 * @author
 * @function About
 **/

export const About = (props) => {
  const [infoData, setInfoData] = useState([
    {
      key:1,
      title: "MSSV",
      des: "loading...",
    },
    {
      key:2,
      title: "Tên đầy đủ",
      des: "loading...",
    },
    {
      key:3,
      title: "Tuổi",
      des: "loading...",
    },
    {
      key:4,
      title: "Lớp",
      des: ["loading..."],
    },
    {
      key:5,
      title: "Giới tính",
      des: "loading...",
    },
  ]);
  const { dataDetails } = props;
  useEffect(() => {
    if (dataDetails) {
      setInfoData([
        {
          key:1,
          title: "MSSV",
          des: dataDetails.info ? dataDetails.info.mssv : "Loading",
        },
        {
          key:2,
          title: "Tên đầy đủ",
          des: dataDetails ? dataDetails.name : "Loading",
        },
        {
          key:3,
          title: "Tuổi",
          des: dataDetails ? dataDetails.age : "Loading",
        },
        {
          key:4,
          title: "Lớp",
          des: dataDetails ? dataDetails.classes : "Loading",
        },
        {
          key:5,
          title: "Giới tính",
          des: dataDetails ? dataDetails.gender : "Loading",
        },
      ]);
    }
  }, [dataDetails]);
  return (
    <div className={props.class}>
      {infoData.map((info) => {
        return (
          <div className="info-details" key={info.key}>
            <span>
              {info.title}:{" "}
              {info.des &&
              (typeof info.des == "string" || typeof info.des == "number")
                ? info.des && info.des
                : typeof info.des == "object" && info.des.length
                ? info.des.map((element) => {
                    let color =
                      element.length > 10
                        ? "blue"
                        : element === "CD19CNTT2"
                        ? "volcano"
                        : "green";
                    return <Tag color={color} key={element[0]}>{element}</Tag>;
                  })
                : "Chưa cập nhật"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

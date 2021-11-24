import React, {useEffect, useState } from 'react'

/**
* @author
* @function Career
**/

export const Career = (props) => {
    const [careerInfo,setCareerInfo] = useState([
        {
            key:1,
            title:"Ngành học",
            des:"Loading..."
        },
        {
            key:2,
            title:"Khóa",
            des:"Loading..."
        },
        {
            key:3,
            title:"Chức vụ",
            des:"Loading..."
        },
        {
            key:4,
            title:"Cấp đào tạo",
            des:"Loading..."
        },
        {
            key:5,
            title:"Loại hình đào tạo",
            des:"Loading..."
        },
    ])
    const {dataDetails} = props
    useEffect(()=>{
        if(dataDetails){
            setCareerInfo([
                {
                    key:1,
                    title:"Ngành học",
                    des: dataDetails ? dataDetails.specialized : "Loading..."
                },
                {
                    key:2,
                    title:"Khóa",
                    des: dataDetails ? dataDetails.course : "Loading..."
                },
                {
                    key:3,
                    title:"Chức vụ",
                    des:dataDetails ? dataDetails.roles : "Loading..."
                },
                {
                    key:4,
                    title:"Cấp đào tạo",
                    des:dataDetails ? dataDetails.levelEducate : "Loading..."
                },
                {
                    key:5,
                    title:"Loại hình đào tạo",
                    des:dataDetails ? dataDetails.typeEducate : "Loading..." 
                },
            ])
        }
    },[dataDetails])
  return(
    <div className={props.class}>
        {careerInfo.map((info)=>{
            return (
                <div className="specialized" key={info.key}>
                    <span>{info.title} : {
                    info.des ? info.des : "Chưa cập nhật"
                    }</span>
                </div>
            )
        })}
    </div>
   )
  }

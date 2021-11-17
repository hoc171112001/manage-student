import React, {useEffect, useState } from 'react'

/**
* @author
* @function Career
**/

export const Career = (props) => {
    const [careerInfo,setCareerInfo] = useState([
        {
            title:"Ngành học",
            des:"Loading..."
        },
        {
            title:"Khóa",
            des:"Loading..."
        },
        {
            title:"Chức vụ",
            des:"Loading..."
        },
        {
            title:"Cấp đào tạo",
            des:"Loading..."
        },
        {
            title:"Loại hình đào tạo",
            des:"Loading..."
        },
    ])
    const {dataDetails} = props
    useEffect(()=>{
        if(dataDetails){
            setCareerInfo([
                {
                    title:"Ngành học",
                    des: dataDetails ? dataDetails.specialized : "Loading..."
                },
                {
                    title:"Khóa",
                    des: dataDetails ? dataDetails.course : "Loading..."
                },
                {
                    title:"Chức vụ",
                    des:dataDetails ? dataDetails.roles : "Loading..."
                },
                {
                    title:"Cấp đào tạo",
                    des:dataDetails ? dataDetails.levelEducate : "Loading..."
                },
                {
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
                <div className="specialized">
                    <span>{info.title} : {
                    info.des ? info.des : "Chưa cập nhật"
                    }</span>
                </div>
            )
        })}
    </div>
   )
  }

import React, { useEffect, useState } from "react";

/**
 * @author
 * @function Details
 **/

export const Details = (props) => {
  let { dataDetails } = props;
  return (
    <div className={props.class}>
      <div className="left-info">
        <div className="info-left">
          <span>Nơi sinh: {dataDetails?dataDetails.address ? dataDetails.address : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-left">
          <span>Địa chỉ: {dataDetails?dataDetails.locate ? dataDetails.locate : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-left">
          <span>Ngày sinh: {dataDetails?dataDetails.birth ? dataDetails.birth : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-left">
          <span>Dân tộc: {dataDetails?dataDetails.nation ? dataDetails.nation : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-left">
          <span>Tôn giáo: {dataDetails?dataDetails.religion ? dataDetails.religion : "Chưa cập nhật" : "Loading..."} </span>
        </div>
      </div>
      <div className="right-info">
        <div className="info-right">
          <span>Ngày vào Đoàn: {dataDetails?dataDetails.union ? dataDetails.union : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-right">
          <span>CMND: {dataDetails?dataDetails.cmnd ? dataDetails.cmnd : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-right">
          <span>BHYT: {dataDetails?dataDetails.bhyt ? dataDetails.bhyt : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-right">
          <span>SĐT: {dataDetails?dataDetails.phone ? dataDetails.phone : "Chưa cập nhật" : "Loading..."} </span>
        </div>
        <div className="info-right">
          <span>Email: {dataDetails?dataDetails.email ? dataDetails.email : "Chưa cập nhật" : "Loading..."} </span>
        </div>
      </div>
    </div>
  );
};

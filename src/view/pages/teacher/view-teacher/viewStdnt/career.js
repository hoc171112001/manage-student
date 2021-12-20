import React, { useEffect, useState } from "react";

/**
 * @author
 * @function Career
 **/

const Career = (props) => {
  const { dataDetails } = props;
  return (
    <div className={props.class}>
      <div className="specialized">
        <span>Ngày vào làm: {dataDetails?dataDetails.workDate ? dataDetails.workDate : "Chưa cập nhật" :"Loading..."}</span>
      </div>
      <div className="specialized">
        <span>Kinh nghiệm: {dataDetails?dataDetails.teacherExp ? dataDetails.teacherExp : "Chưa cập nhật" :"Loading..."}</span>
      </div>
    </div>
  );
};

export default React.memo(Career);

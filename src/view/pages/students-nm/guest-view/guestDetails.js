import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Typography } from "antd";
import { getToken } from "../../../../helper/helper";

import { About } from "./viewStdnt/about";
import { Avatar } from "./viewStdnt/avatar";
import { Career } from "./viewStdnt/career";
import { Details } from "./viewStdnt/details";
import * as type from "../../../../redux/const/const";

/**
 * @author
 * @function GuestView
 **/

const GuestView = (props) => {
  const dispatch = useDispatch();
  const token = getToken();
  const [data, setData] = useState([]);
  const { key } = useParams();
  let dataApi = useSelector((state) => {
    return state.student.dataDetails;
  });
  let { loadingDetails } = useSelector((state) => {
    return state.student;
  });
  useEffect(() => {
    dispatch({ type: type.FETCH_CLASSES, payload: token });
  }, []);
  useEffect(() => {
    dispatch({ type: type.DETAIL_STUDENT_FETCH, payload: { token, key } });
  }, []);
  useEffect(() => {
    if (dataApi) {
      setData(dataApi);
    }
  }, [dataApi]);
  return <div className="student-wrapper">
  <Spin spinning={loadingDetails} tip="Loading">
    <div className="top-text">THÔNG TIN SINH VIÊN</div>
    <div className="student-info">
      <div className="info">
        <Avatar
          class="avatar"
          dataDetails={data}
          dispatchData={{ token: token, key: key }}
          key={key}
        />
        <About class="about" dataDetails={data}  key="2"/>
      </div>
      <Career class="career" dataDetails={data} key={key}/>
    </div>
    <div className="top-text">THÔNG TIN CÁ NHÂN</div>
    <Details class="student-details" dataDetails={data} key="4"/>
  </Spin>
</div>;
};

export default GuestView;

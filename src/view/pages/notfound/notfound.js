import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
/**
 * @author
 * @function NotFoundPage
 **/

export const NotFoundPage = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/dasboard">Back to Dashboard</Link>
        </Button>
      }
    />
  );
};

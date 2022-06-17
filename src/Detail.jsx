import React from "react";
import { useParams } from "react-router-dom";
import DetailPage from "./components/DetailPage";

const Detail = (props) => {
  const { id } = useParams();
  const record = props.records.filter(record => record.id === id);
  return (
  <div className="detail-container">
    <DetailPage record={record[0]}></DetailPage>
  </div>
  );
};

export default Detail;
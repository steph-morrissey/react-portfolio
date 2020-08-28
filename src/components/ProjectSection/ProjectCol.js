import React from "react";
// import { Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const ProjectCol = (props) => {
  return (
    <div className='d-flex p-2 sm-col-12 md-col-3 lg-col-4'>
      <Card
        style={{ width: 300 }}
        cover={
          <img alt={props.info.name} src={`/images/${props.info.imageName}`} />
        }
      >
        <Meta title={props.info.name} description={props.info.description} />
      </Card>
    </div>
  );
};

export default ProjectCol;

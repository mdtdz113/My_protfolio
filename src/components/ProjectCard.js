import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="icon_link">
            <span>{description}</span>
            <span>{link}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

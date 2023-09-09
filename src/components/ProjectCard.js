import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, urlProject }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a className="project-link" href={urlProject} target="_blank">
            Посмотреть
          </a>
        </div>
      </div>
    </Col>
  );
};

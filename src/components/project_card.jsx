import { useState } from "react";

function ProjectCard({ date, name, description, links, details }) {
  const [showDetails, setDetails] = useState(false);

  function flipDetails() {
    setDetails(!showDetails);
  }

  function getLinks() {
    return links.map((link) => (
      <>
        <a
          className={"finetext"}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          // {link.description}
        </a>
        <br />
      </>
    ));
  }

  function getCardContent() {
    if (!showDetails) {
      return (
        <>
          <h3>{name}</h3>
          <p>{description}</p>
        </>
      );
    } else {
      let linksJsx = getLinks();
      return (
        <>
          <br />
          <p>{details}</p>
          {linksJsx}
        </>
      );
    }
  }

  function renderButton() {
    if (showDetails) {
      return (
        <button className="invert-button-style" onClick={flipDetails}>
          <p>//</p>
        </button>
      );
    }
    else {
      return (
        <button onClick={flipDetails}>
          <p>//</p>
        </button>
      );
    }
  }

  return (
    <div className="card project" date={date} name={name}>
      {renderButton()}
      <div className="text">{getCardContent()}</div>
    </div>
  );
}

export default ProjectCard;

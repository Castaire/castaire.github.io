import { useState } from "react"

function WorkCard({date, title, company, description}) {

  return (
    <div className="card brickredborder" date={date}>
      <div className="text">
        <h3 className="brickred">{company}</h3>
        <p>
          <b>{title}</b> {description}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
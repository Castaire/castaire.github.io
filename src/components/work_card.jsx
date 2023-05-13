import { useState } from "react"

function WorkCard({date, title, company, description}) {

  return (
    <div className="card work" date={date} name={company}>
      <div className="text">
        <h3>{company}</h3>
        <p>
          <b>{title}</b> {description}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
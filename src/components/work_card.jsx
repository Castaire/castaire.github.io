import { useState } from "react"

function WorkCard({date, title, company, description}) {
  const classes = "card workcard";
  const textClass = "text"

  return (
    <div className={classes} date={date}>
      <div className={textClass}>
        <h3>{company}</h3>
        <p>
          <b>{title}</b> {description}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
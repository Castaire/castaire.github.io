import React from 'react';

const WorkCard = props => {
    const classes = "card workcard"

    return (
        <div className={classes} date={props.date}>
            <div className="text">
                <br/>
                <h3>{props.company}</h3>
                <p><b>{props.title}</b> {props.description}</p>
            </div>
        </div>
    )
}

export default WorkCard;
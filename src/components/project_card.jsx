


const ProjectCard = (props) => {
    const classes = "card projectcard"
    const textClass = "text"

    return (
        <div className={classes} date={props.date}>
            <div className={textClass}>
                <br/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;

function ProjectCard({date, name, description, techList}) {
    const classes = "card projectcard"
    const textClass = "text"

    function handleClick() {
        alert('clicked!');
    }

    return (
        <div className={classes} date={date}>
            <button onClick={handleClick}>
                <p>x</p>
            </button>
            <div className={textClass}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
import { useState } from "react";

function ProjectCard({date, name, description, details}) {
    const [showDetails, setDetails] = useState(false);
    
    const cardClasses = "card projectcard"
    const textClass = "text"
    
    function flipDetails() {
        setDetails(!showDetails);
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
            return (
                <>
                    <p>{details}</p>
                </>
            );
        }    
    }
    
    return (
        <div className={cardClasses} date={date}>
            <button onClick={flipDetails}>
                <p>//</p>
            </button>
            <div className={textClass}>
                {getCardContent()}
            </div>
        </div>
    );
}
        
export default ProjectCard;
import { useState } from "react";

function ProjectCard({date, name, description, links, details}) {
    const [showDetails, setDetails] = useState(false);
    
    const cardClasses = "card projectcard";
    const textClass = "text";
    const fineTextClass = "finetext";
    
    function flipDetails() {
        setDetails(!showDetails);
    }

    function getLinks() {
        return (
            links.map(link => 
                <>
                <a className={fineTextClass} href={link.href} target="_blank"  rel="noreferrer">
                    // {link.description}
                </a>
                <br/>
                </>
            )
        );
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
                    <br/>
                    <p>{details}</p>
                    {linksJsx}
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
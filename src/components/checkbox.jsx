import { useState } from "react";

function CheckBox({fillColorClass, borderColorClass, caption, defaultClick}) {
    const [clicked, setClicked] = useState(defaultClick);

    function flipClicked() {
        setClicked(!clicked);
    }

    function getColorClasses() {
        return clicked ? `${fillColorClass} ${borderColorClass}` : `${borderColorClass}`;
    }

    return (
        <div className="checkbox">
            <input type="checkbox"/>
            <label onClick={flipClicked}
                className={getColorClasses()}/>
            <p>{caption}</p>
        </div>
    );
}

export default CheckBox;
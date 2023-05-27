function CheckBox({caption, clicked, onClick, fillColorClass, borderColorClass}) {

    function getColorClasses() {
        return clicked ? `${fillColorClass} ${borderColorClass}` : `${borderColorClass}`;
    }

    return (
        <div className="checkbox">
            <input type="checkbox"/>
            <label onClick={onClick}
                className={getColorClasses()}/>
            <p>{caption}</p>
        </div>
    );
}

export default CheckBox;
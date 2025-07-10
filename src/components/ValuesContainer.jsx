import { useEffect, useState} from 'react';
import '../styles/componentStyles/ValuesContainer.css'

const ValuesContainer = (props) => {

    const isActive = props.idx === props.activeComp;

    return(
        <div className={`valuesContainerRoot ${isActive ? "highlight" : ""}`}>
            {props.children}
            <h5>{props.valueName}</h5>
        </div>
    );
}

export default ValuesContainer;
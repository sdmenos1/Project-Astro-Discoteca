import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHourglassHalf,faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import { useState } from "react"
import '../styles/ButtonStyleRegistro.css'
export default function ButtonReserva({color}){
    const [reserve,setReserve] = useState(false)
    const [TextButton,setTextButton] = useState(false)
    return(
        <div className="container">
            <a href="" className="button">
                <div className="button__content">
                    <span className="button__text">{TextButton? 'Reservar':'Reservado'}</span>
                    {
                        reserve? <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> :<FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
                    }
                    <div className="button__reflection-1"></div>
                    <div className="button__reflection-2"></div>
                </div>
                <div className="button__shadow"></div>
            </a>
        </div>
    )
}
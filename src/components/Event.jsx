import React from 'react'
import '../styles/EventContent.css'
export default function EventContent({img,fecha,title,informacion}) {
    return( 
        <>
                <article className='container-event'>
                    <div className='card glass'>
                        <img src={img} alt="Imagen del evento" className='img-event' />
                        <div className='card-event-info'>
                            <h3 className='card-event-title'>{title}</h3>
                            <p className='card-event-fecha'>{fecha}</p>
                                <span className='card-event-description'>{informacion}</span>
                        </div>
                            <div className='buttons'>
                                <button className='card-event btn-buy'>Comprar</button>
                                <button className='card-event btn-info'>Ver más</button>
                            </div>
                    </div>
                </article>
        </>
    )
}
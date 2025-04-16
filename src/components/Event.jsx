import React from 'react'
import '../styles/EventContent.css'
import ButtonReserva from './Button'
export default function EventContent({img,fecha,title,informacion,background,eventContent}) {
    return( 
        <>
                <article className='container-event'>
                        <div
                            className='card-glass'
                            style={{
                                backgroundImage: `url(${background})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >        
                                <div className='event-information'>
                                    <div className='flyer'>
                                        <img src={img} className='image-flyer' />
                                    </div>
                                    <div className='information-secundary'>
                                        <h2 className='title-event'>{title}</h2>
                                        <p className='date-event'>{fecha}</p>
                                        <p className='information-event'>{informacion}</p>
                                        <ButtonReserva color={eventContent} />
                                    </div>
                                        
                                </div>
                    </div>
                </article>
        </>
    )
}
import EventContent from "./EventContent.jsx";
import cards from '../../data/cards.json';
import '../../styles/CardContainer.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules


export default function CardEvent() {
    return (
        <main className="main-container">
            <section>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    className="mySwiper"
                >
                    {
                        cards.map((card) => (
                            <SwiperSlide  key={card.id}>
                                <EventContent
                                    img={card.image}
                                    fecha={card.fecha}
                                    title={card.title}
                                    informacion={card.description}
                                    background={card.background}
                                    eventContent={card.buttonColor}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </main>
    );
}
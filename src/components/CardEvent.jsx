import EventContent from "./Event.jsx";
import cards from '../data/cards.json';
import '../styles/CardContainer.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CardEvent() {
    return (
        <main className="main-container">

                {
                    cards.map((card) => (

                            <EventContent
                                key={card.id}
                                img={card.image}
                                fecha={card.fecha}
                                title={card.title}
                                informacion={card.description}
                                background={card.background}
                            />
                    ))
                }
        </main>
    );
}
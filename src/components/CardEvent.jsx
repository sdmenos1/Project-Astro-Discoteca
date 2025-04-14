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
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <EventContent
                                img={card.image}
                                fecha={card.fecha}
                                title={card.title}
                                informacion={card.description}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </main>
    );
}
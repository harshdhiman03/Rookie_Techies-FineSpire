'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import FeedbackCard from "./cards/FeedbackCard";
import styles from "../../../public/styles/home.module.css";

export default function Carousel() {
    const data = [
        [{
            "name": "Cameron Williamson",
            "description": "SDE"
        },
        {
            "name": "Mary Rodriguez",
            "description": "QA Engineer"
        }],
        [{
            "name": "Benjamin Thomas",
            "description": "Product Manager"
        },
        {
            "name": "Jennifer Johnson",
            "description": "SWE"
        }],
        [{
            "name": "Daniel Martinez",
            "description": "SDE"
        },
        {
            "name": "Emily Brown",
            "description": "QA Engineer"
        }],
        [{
            "name": "Jacob Taylor",
            "description": "SDE"
        },
        {
            "name": "Linda Wilson",
            "description": "Product Manager"
        }],
        [{
            "name": "Michael Jones",
            "description": "SWE"
        },
        {
            "name": "Jessica Garcia",
            "description": "QA Engineer"
        }]
    ]

    const feedbackList = data.map((items, key) => {
        return (
            <SwiperSlide key={key}><FeedbackCard name={items[0].name} description={items[0].description} /><FeedbackCard name={items[1].name} description={items[1].description} /></SwiperSlide>
        )
    })
    return (
        <div className={styles.carousel}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {feedbackList}
            </Swiper>
        </div>
    );
}

"use client";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css'

export default function StarRating({ noOfStarts =5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }


    function handleMouseLeave(getCurrentIndex) {
        setHover(rating);
    }


    return (
        <div className="star-rating">
            {
                [...Array(noOfStarts)].map((_, index) => {
                    index += 1;

                    return <FaStar
                        key={index}
                        className={index <=(hover || rating) ? 'active': 'incative'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        OnMouseLeave={() => handleMouseLeave(index)}
                        size={40} />;
                })
            }
        </div>
    );
}
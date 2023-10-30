// import React from 'react'
import people from './data'
import { useState } from "react"
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
export default function Review() {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = (number) => {
        if(number > people.length - 1){
            return 0
        }
        if(number < 0){
            return people.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex) 
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex)  
        })
    }

  return (
    <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className="author">{name} </h4>
        <p className='job'>{job} </p>
        <p className='info'>{text} </p>
        <div className="button-container">
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
    </article>
  )
}

import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const transition = {type : "spring", duration: 3}

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;



  return (
    <div id='Testimonials' className='testimonials'>
        <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={selected}
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 1, x: -100}}
        transition={transition}

        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color: "var(--orange)"}}>
                {testimonialsData[selected].name}
            </span>{" "}
           - {testimonialsData[selected].status}
        </span>
        </div>

        <div className="right-t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}>

            </motion.div>

            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}>

            </motion.div>


            <motion.img 
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 1, x: -100}}
            transition={transition}

            src={testimonialsData[selected].image} alt="image" />
             <div className='arrows'>

                <img onClick={() => (
                selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            )}
                src={leftArrow} alt="left" />
                <img onClick={() => (
                selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            )}
                src={rightArrow} alt="right" />


             </div>
        </div>
    </div>
  )
}

export default Testimonials
import { useEffect, useState, useRef, useCallback } from "react";


const ImageSlider = ({slides}) => {

    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    ///styles
    const sliderStyles = {
        height: "100%",
        padding: "20px",
        position: "relative",
    };
    const slidestyles ={
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgorundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0,-50%)",
        right:"32px",
        fontSize: "55px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0,-50%)",
        left:"32px",
        fontSize: "55px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotContainterStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    };


    ///functions

    const goToPreivious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = useCallback( () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
    },[currentIndex,slides]);

        const goToSLide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        }
        useEffect(() =>{
            if (timerRef.current){
                clearTimeout(timerRef.current)
            }
            timerRef.current = setTimeout( () =>{
                goToNext()
            }, 2000);
            return () => clearTimeout(timerRef.current);
        },[goToNext]);

    return( 
    <div style={sliderStyles}> 
         <div style={leftArrowStyles} onClick={goToPreivious} >&lt;</div>
         <div style={rightArrowStyles} onClick={goToNext} >&gt;</div>
        <div style={slidestyles}></div>
        <div style={dotContainterStyles}>
            {slides.map((slide, slideIndex)=>(

                <div key={slideIndex} 
                    style={dotStyles} 
                    onClick={() => goToSLide(slideIndex)} >&#8226;
                </div>
            ))}
        </div>
    </div>);
};

export default ImageSlider;
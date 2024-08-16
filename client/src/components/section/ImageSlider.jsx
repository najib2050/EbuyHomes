import { useState } from "react";
import image1 from "../../assets/realstate.png";
import image2 from "../../assets/realstate2.png";
import image3 from "../../assets/realState3.png";

const slides = [
  {
    image: image1,
    logo: "realstate Agent",
    title: "Find your derem house by us 1",
    paragrph: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
  },
  {
    image: image2,
    logo: "realstate Agent",
    title: "Find your derem house by us 2",
    paragrph: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
  },
  {
    image: image3,
    logo: "realstate Agent",
    title: "Find your derem house by us 3",
    paragrph: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(slides[currentIndex].logo);
  console.log(slides.length);
  const sliderStyle = {
    height: "100%",
    positions: "relative",
  };
  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "blue",
    borderRadius:"20px"
  };
  const leftArraowstyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0 , -50%)",
    left: "300px",
    fontSize: "40px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArraowstyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0 , -50%)",
    right: "300px",
    fontSize: "40px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
    // backgroundColor:"red"
  };
  const goToPrevious = () => {
    const firstSlider = currentIndex === 0;
    const newSlider = firstSlider ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlider);
  };
  const dotStyleContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "50px",
    color:"#F68F74"
  };
  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newSlides = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlides);
  };
  const goToSlides = (slides) => {
    setCurrentIndex(slides);
  };

  return (
    <div style={sliderStyle}>
      <div style={leftArraowstyle} onClick={goToPrevious}>
        <i className="bi bi-arrow-left-short"></i>
      </div>
      <div style={rightArraowstyle} onClick={goToNext}>
        <i className="bi bi-arrow-right-short"></i>
      </div>
      <div style={{display: 'flex', alignItems:"center", justifyContent:"space-around"}}>
        <div style={{height:"200px",display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
         <div>
          <p>
            <span style={{ color: "red", margin: "10px" }}>
              <i className="bi bi-house-fill" style={{ color: "#F2AA9E" }}></i>
            </span>{" "}
            {slides[currentIndex].logo}
          </p>

         </div>
         <div>
          <h1> {slides[currentIndex].title}</h1>

         </div>
         <div>
          <p> {slides[currentIndex].paragrph}</p>

         </div>

          <button style={{backgroundColor:"#F68F74",width:"150px", height:"50px", outline:"0", borderRadius:"5px", fontSize:"15px"}}>make an inquery</button>
        </div>
        <div >
          <img src={slides[currentIndex].image} alt="" style={slideStyle} />
        </div>
      </div>
      <div style={dotStyleContainer}>
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              style={dotStyle}
              onClick={() => goToSlides(slideIndex)}
            >
              <i className="bi bi-dot"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;



import ImageSlider from './ImageSlider.jsx';
import './section.css'
ImageSlider
function Section() {
  const containerStyles={
    // backgroundColor:"blue",
    backgroundColor:"#F1F6F7",
    width:"80vw",
    height:"480px",
    margin:"0 auto"

  }
  
 
  return(
  <div>
    <div style={containerStyles }>
    <ImageSlider/>

      {/* {
        data.map((item)=>{
          return (
            <div key={item.key}>
            {  console.log(item)}
              <ImageSlider slides={item}/>
            </div>
          )
        })
      } */}

    </div>
  </div>

  ) 
}
export default Section;
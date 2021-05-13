import React ,{useState,useEffect} from 'react'
import  "./../css/slider.css"

export default function Slider({bannerarray}) {
  const[ index, setIndex] = useState(0)

  // const prevIndex=()=>{
  //   setIndex(index==0? bannerarray.length-1: index-1)
  // }

  const nextIndex=()=>{
    setIndex(index== bannerarray.length-1? 0 : index+1)
  }
  
  useEffect(()=>{
    let slider =setInterval(nextIndex, 3000);
    return ()=> clearInterval(slider)
  },[index]);
 
  return (
    <div className='carousal'>
      <img className='banner' src={bannerarray[index]}/>
    
    </div>
  )
}

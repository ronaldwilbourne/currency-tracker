import React,{useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'

const Content = () => {
    const [data, setData] = useState([])


    useEffect(()=> {
        axios ({
            method:'Get',
            url:'https://www.scorebat.com/video-api/v3/feed/?token=MzE0NjdfMTY2NzIyNjY0Ml9kZmI3NTRlZTFkMjU1NDFkNzU0MjAyNGY0ZjlmMWJkZmJmMDYyN2Y3'
            
        }).then(res=> {
          console.log(res.data);
          setData(res.data.response)
        }).catch (e => console.log(e))
    },[] )



  return (
    <div className='content-container'>
      {data.map((item) =>(
        <div className='itemDiv' key={item.title}>
          <div className='itemHeading'><h4>{item.title}</h4></div>
          <div className='itemImage'>
            <img src={item.thumbnail} alt='#'/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
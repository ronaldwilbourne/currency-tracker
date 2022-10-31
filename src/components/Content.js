import React,{useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'

const Content = () => {
    const [data, setData] = useState([])


    useEffect(()=> {
        axios ({
            method:'Get',
            url:''
        })
    },[] )



  return (
    <div className='content-container'> Content</div>
  )
}

export default Content
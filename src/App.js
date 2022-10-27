
import { useState } from 'react';
import './App.css';
import parse from "html-react-parser";


function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '636931c4bamsh3383d16f41dd3f1p19c936jsncaa0b52de777',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };

const [fData, setFdata] = useState([])
const getFootballData = async () => {
  const response = await fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
  const data = await response.json()
  setFdata(data)
  console.log(data)
}
getFootballData() 
  return (
    <div className="App">

    {fData.map((team, i) => {
      return (
        <div key={i}>
          <h1>{team.title}</h1>
          <div>{team.videos.map((video, i)=>{
            return(
              <div key={i}>
                <div>{parse(video.embed)}</div>
              </div>
            )
          })}</div>
          <h4>Team 1: {team.side1.name}</h4>
          <h4>Team 2: {team.side2.name}</h4>
        </div>

      )
    })}      
    </div>
  );
}

export default App;

import './App.css';
import Slide from './Slide.js'
import data from './data.js'
import { useState } from 'react';
import { ReactComponent as Right} from './right.svg'
import { ReactComponent as Left} from './left.svg'


function App() {
  const [carousel, setCarousel] = useState([0,1,2,3,4])
  console.log(carousel)
  const handleClick = (event) => {
    console.log(event.target.name)
    if(event.target.name === 'left') {
      let copy = [...carousel]
      let newEnd = copy.shift()
      copy.push(newEnd);
      setCarousel(copy)
    } else {
      let copy = [...carousel]
      let newEnd = copy.pop()
      copy.unshift(newEnd)
      setCarousel(copy)
    }
  }

  return (
    <div className="App-Outer">
    <div className="App-Inner">
      <div className='Header'>Latana Knowledge Center</div>
      <div className="Header-Subtext">Everything you need to know about the best brand tracking solution in the world.</div>
      <div className="Slider">
        {carousel.map((val, index) => {
            return <Slide val={data[val]} key={index}/>
        })}
      </div>
      <div className="Slider-Button-Container">
        <div className="Slider-Button" onClick={handleClick} name='left'>
          <Left className='Svg'/>
                  </div>
        <div className="Slider-Button" onClick={handleClick} name='right'>
        {/* <img src="./right.svg"/> */}
        <Right className='Svg'/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

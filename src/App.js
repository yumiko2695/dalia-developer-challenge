import './App.css';
import Slide from './Slide.js'

function App() {
  const data = [ {
    id: 0,
    slideHeader: 'What is Latana?',
    slideSubHeaders: ['How does Latana Work?', 'Why choose Latana', 'What does Latana cost?'],
    img: './slide0.png',
    redirect: 'url'
  },{
    id: 1,
    slideHeader: 'Getting Started',
    slideSubHeaders: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
    img: './slide1.png',
    redirect: 'url'
  },
  {
    id: 2,
    slideHeader: 'Using Latana',
    slideSubHeaders: ['How to use Latana?', 'What is the Brand Funnel?', 'How to interpret Brand Tracking Data?'],
    img:'./slide2.png',
    redirect: 'url'
  },
  {
    id: 3,
    slideHeader: 'Data Collection & Methodology',
    slideSubHeaders: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
    img: './slide3.png',
    redirect: 'url'
  },
  {
    id: 4,
    slideHeader: 'Sucess Strategies',
    slideSubHeaders: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
    img: './slide3.png',
    redirect: 'url'
  }]
  return (
    <div className="App-Outer">
    <div className="App-Inner">
      <div className='Header'>Latana Knowledge Center</div>
      <div className="Header-Subtext">Everything you need to know about the best brand tracking solution in the world.</div>
      <div className="Slider">
        {data.map((val, index) => {
          if(index === val.id) {
            return <Slide val={val} key={index}/>
          }
        })}
      </div>
    </div>
    </div>
  );
}

export default App;

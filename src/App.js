import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Main from './components/Main';
import Header from './components/Header';



export default function App() {
  return <div className='App'>
    <Header />
    <br></br>
    <br></br>
    <body>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <LeftSide />
        <Main name={'Matt Rhoades'} role={'Software Developer'} />
        <RightSide />
      </div>
    </body>
  </div>

}


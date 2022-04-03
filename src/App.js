import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Main from './components/Main';
import Header from './components/Header';


export default function App() {
  return <div className='App'>
    <Header />
    <div>
      <LeftSide />
      <Main name={'Matt Rhoades'} role={'Student'} />
      <RightSide />
    </div>
  </div>

}


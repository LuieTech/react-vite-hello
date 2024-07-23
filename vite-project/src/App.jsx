// App.jsx
// import './App.css';
import logoImg from './assets/ironhack-logo-xs.png';
import menuIcon from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png'
import Navbar from './components/navbar/Navbar';
import Header from './header/Header';
import Features from './components/features/Features';


function App() {
  return (
    <div className="App">
      <Navbar logo={logoImg} menu={menuIcon}/>
      <Header />
      <Features
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
      />
    </div>
  );
}

export default App;



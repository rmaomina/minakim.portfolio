import './App.css';
import Profile from './components/Profile'
import Footer from './components/Footer'
import Navigator from './components/Navigator'

function App() {
  return (
    <div className="app">
      <Navigator/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;

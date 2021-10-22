import './App.css';
import HomeLayoutHOC from './HOC/Home.HOC'
import HomeLayout from './layout/Home.layout'
import Master from './Components/master'

import Delivery from './Components/Delivery';
function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Delivery} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;

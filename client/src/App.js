import './App.css';
import HomeLayoutHOC from './HOC/Home.HOC'
import HomeLayout from './layout/Home.layout'
import Master from './Components/master'
function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomeLayout} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;

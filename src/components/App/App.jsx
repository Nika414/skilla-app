/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-indent */
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <Main />
    </div>
  );
}

export default App;

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function SideBar() {
  return (
    <div className="side-bar">
      <img className="side-bar__logo" src={logo} alt="Лого" />
      <Navigation />
    </div>
  );
}

export default SideBar;

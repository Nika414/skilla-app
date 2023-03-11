import { NavLink } from 'react-router-dom';
import calls from '../../images/nav/calls.svg';
import contragents from '../../images/nav/contragents.svg';
import documents from '../../images/nav/documents.svg';
import knowledge from '../../images/nav/knowledge.svg';
import messages from '../../images/nav/messages.svg';
import orders from '../../images/nav/orders.svg';
import reports from '../../images/nav/reports.svg';
import settings from '../../images/nav/settings.svg';
import specialists from '../../images/nav/specialists.svg';
import summary from '../../images/nav/summary.svg';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            exact
            to="/summary"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${summary})` }} />
            Итоги
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/orders"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${orders})` }} />
            Заказы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/messages"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${messages})` }} />
            Сообщения
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${calls})` }} />
            Звонки
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="contragents"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${contragents})` }} />
            Контрагенты
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="documents"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${documents})` }} />
            Документы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/specialists"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${specialists})` }} />
            Исполнители
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/reports"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${reports})` }} />
            Отчеты
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/knowledge"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${knowledge})` }} />
            База знаний
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to="/settings"
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            <div className="navigation__img" style={{ backgroundImage: `url(${settings})` }} />
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

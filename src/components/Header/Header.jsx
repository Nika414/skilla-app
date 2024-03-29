import { useState } from 'react';
import { ru } from 'date-fns/locale';
import { format, setDefaultOptions } from 'date-fns';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import Infographics from '../Infographics/Infographics';
import search from '../../images/search.svg';
import showMore from '../../images/show-more.svg';
import avatar from '../../images/avatar.svg';

setDefaultOptions({ locale: ru });

function Header() {
  const date = format(new Date(), 'EEEE dd MMM');
  const options = [
    {
      value: 0,
      label: 'Все организации',
    },
    {
      value: 1,
      label: 'ООО Грузчиков Сервис Запад',
    },
    {
      value: 2,
      label: 'ИП Митрофанов М.М.',
    },
    {
      value: 3,
      label: 'ИП Иванов М.М.',
    },
  ];
  const [company, setCompany] = useState([options[0]]);

  return (
    <header className="header">
      <div className="header__date">{date}</div>
      <Infographics text="Новые звонки " color="#28A879" accentText="20 из 30 шт" />
      <Infographics text="Качество разговоров " color="#FFD500" accentText="40%" />
      <Infographics text="Конверсия в заказ " color="#EA1A4F" accentText="67%" />
      <img className="header__search-logo" src={search} alt="Поиск" />
      <button type="button" className="header__organization-container">
        {/* <span className="header__organization">ИП Сидорова Александра Михайловна</span> */}
        <StyledSelect
          className="header__organization"
          options={options}
          onChange={(item) => {
            setCompany(item);
          }}
          values={company}
        />
        <img src={showMore} alt="Раскрыть" className="header__show-more" />
      </button>
      <div className="header__avatar-container">
        <div className="header__avatar" style={{ backgroundImage: `url(${avatar})` }} />
        <button type="button" aria-label="Раскрыть" style={{ backgroundImage: `url(${showMore})` }} className="header__show-more" />
      </div>
    </header>
  );
}
const StyledSelect = styled(Select)`
background: transparent;
  border: none !important;
  color: #fff;
  outline: none;
  padding: 0;
  margin: 0;
  box-shadow: none !important;
  cursor: pointer !important;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    background: url('../../images/show-more.svg');
  }
  .react-dropdown-select-option {
    border: none;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #fff;
    margin: 0;
  }
  .react-dropdown-select-input:: placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #002CFB !important;
  }
  
  .react-dropdown-select-dropdown {
    position: absolute;
    right: -30px;
    left: unset;
    border: none;
    width: 204px;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
    z-index: 9;
    background: white;
    box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
    border-radius: 4px;
  }
  .react-dropdown-select-item {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 200%;
    border: none;
       
    :hover {
      background: rgba(0, 44, 251, 0.13);
      color: #122945;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected {
    background: rgba(0, 44, 251, 0.13);
    color: #122945;
  }
  
  .react-dropdown-select-item.react-dropdown-select-item-active {
    background: white;
  }
  button.date-picker__button.date-picker__button_calendar > div > div:focus-within {
    outline: none;
  }
  .react-dropdown-select-type-single {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #002CFB;
  }
`;

export default Header;

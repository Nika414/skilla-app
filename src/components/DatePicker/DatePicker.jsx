import { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import Calendar from './Calendar';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function DatePicker() {
  const options = [
    {
      value: 0,
      label: '3 дня',
    },
    {
      value: 1,
      label: 'Неделя',
    },
    {
      value: 2,
      label: 'Месяц',
    },
    {
      value: 3,
      label: 'Год',
    },
    {
      value: 4,
      label: 'Указать даты',
    },
  ];
  const [currentOption, setCurrentOption] = useState(0);
  const [timePeriod, setTimePeriod] = useState([options[currentOption]]);

  function handleRightArrow() {
    if (currentOption === 4) {
      setCurrentOption(0);
      setTimePeriod([options[0]]);
    } else {
      setCurrentOption((prev) => prev + 1);
      setTimePeriod([options[currentOption + 1]]);
    }
  }

  function handleLeftArrow() {
    if (currentOption === 0) {
      setCurrentOption(4);
      setTimePeriod([options[4]]);
    } else {
      setCurrentOption((prev) => prev - 1);
      setTimePeriod([options[currentOption - 1]]);
    }
  }

  return (
    <div className="date-picker">
      <button type="button" className="date-picker__button" onClick={handleLeftArrow}>
        <LeftArrow />
      </button>
      <button type="button" className="date-picker__button date-picker__button_calendar">
        <Calendar />
        <StyledSelect
          options={options}
          onChange={(item) => {
            setTimePeriod(item);
            setCurrentOption(item[0].value);
          }}
          values={timePeriod}
        />
        {/* <span className="date-picker__text"> 3 дня </span> */}
      </button>
      <button type="button" className="date-picker__button" onClick={handleRightArrow}>
        <RightArrow />
      </button>
    </div>
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
    display: none;
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

export default DatePicker;

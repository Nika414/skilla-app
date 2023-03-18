import DatePicker from '../DatePicker/DatePicker';

function InfoBlock() {
  return (
    <div className="info-block">
      <div className="info-block__balance">
        <span className="info-block__balance-text">
          Баланс:
          <span className="info-block__balance-text info-block__balance-text_accent">
            {' 272 ₽'}
          </span>
        </span>
        <button className="info-block__balance-button" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="info-block__balance-img" d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z" fill="#005FF8" />
          </svg>
        </button>
      </div>
      <DatePicker />
    </div>
  );
}

export default InfoBlock;

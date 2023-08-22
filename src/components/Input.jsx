import "./input.css";

const Input = ({ handleChange }) => {
  return (
    <div className="form-input">
      <form>
        <div className="card-name">
          <div>
            <label htmlFor="">CARDHOLDER NAME</label>
          </div>
          <div>
            <input type="text" name="cardName" id="" onChange={handleChange} className="inp" />
          </div>
        </div>
        <div className="card-name">
          <div>
            <label htmlFor="">CARD NUMBER</label>
          </div>
          <div>
            <input type="number" name="cardNumber" id="" onChange={handleChange} className="inp" />
          </div>
        </div>
        <div className="card-date-cvc">
          <div className="card-date">
            <div>
              <label htmlFor="">EXP.DATE (MM/YY)</label>
            </div>
            <div>
              <input type="month" name="data" id="" onChange={handleChange} />
            </div>
          </div>
          <div className="card-cvc">
            <div>
              <label htmlFor="">CVC</label>
            </div>
            <div>
              <input type="number" name="cvc" id="" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="btn">
            <button className="btn-confrim">
                confrim
            </button>
        </div>
      </form>
    </div>
  );
};

export default Input;

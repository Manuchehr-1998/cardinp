import "./card.css";
const Card = ({ cardinp }) => {
  return (
    <div className="form-card">
      <div className="div-krug">
        <div className="krug"></div>
        <div className="krug-black"></div>
      </div>
        <div className="cardnumber">
          <h1>{cardinp.cardNumber}</h1>
        </div>
        <div className="name-data">
          <h1>{cardinp.cardName}</h1>
          <h1>{cardinp.data}</h1>
        </div>
    </div>
  );
};

export default Card;

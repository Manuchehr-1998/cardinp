import "./revers.css";
const Reverscard = ({ cvc }) => {
  return (
    <div className="revers-card">
      <div className="block-black"></div>
      <div className="cvc">
        <h1>{cvc}</h1>
      </div>
      <div className="lorem">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          magnam rerum quas in quia amet aspernatur nulla non ducimus incidunt?
        </p>
      </div>
    </div>
  );
};

export default Reverscard;

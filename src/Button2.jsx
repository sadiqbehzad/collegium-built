import "./button2.css";
const Button2 = (props) => {
  const { label } = props;

  return (
    <div className="main-bttn-container">
      <div className="bttn-container">
        <button className="bttn">{label}</button>
      </div>
      <div className="shadow-container">
        <button className="shadow">{""}</button>
      </div>
    </div>
  );
};

export default Button2;

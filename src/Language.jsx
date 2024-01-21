import Button2 from "./Button2";
import "./language.css";
const Language = () => {
  return (
    <div className="language">
      <form>
        <label>Choose your language.</label>
        <div className="select-parent">
          <select>
            <option value="option1">English</option>
            <option value="option2">French</option>
            <option value="option3">Spanish</option>
          </select>
        </div>
        <Button2 label="Continue" />
      </form>
    </div>
  );
};

export default Language;

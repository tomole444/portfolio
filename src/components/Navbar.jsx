// React Imports
import { Link } from "react-router-dom";

// Asset Imports
import logo from "../assets/oliverj.png";

function Navbar(props) {
  return (
    <>
      <header className="heading">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="oj-logo" />
          </Link>
          <nav>
            <ul role="list" className="nav-list">
              <li>
                <a href="">{props.t("about")}</a>
              </li>
              <li>
                <a href="">{props.t("projects")}</a>
              </li>
              <li>
                <a href="">{props.t("contact")}</a>
              </li>
            </ul>
          </nav>
          <button className="button">{props.t("resume")}</button>
          <label>{props.t("choose")}</label>
          <select value={props.lang} onChange={props.onChange}>
            {props.languages.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </header>
    </>
  );
}

export default Navbar;

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import {BiChevronLeft} from "react-icons/bi";

const cx = classNames.bind(styles);

function Header({title, onBack}) {
  return ( 
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <BiChevronLeft/>
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
   );
}

export default Header;
import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from '~/components/Popper'

import MenuItem from "./MenuItem";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";


const cx = classNames.bind(styles);

function Menu({children, items = []}) {

  const renderItems = () => {
    return items.map((item, index) => (
      <MenuItem key={index} data={item}/>

    ));  
  }

  return ( 
    <Tippy
    interactive
    delay={[0, 700]}
    placement="bottom-end"
    render = {atts => (
      <div className={cx("menu-list")} tabIndex="-1" {...atts}>
        <PopperWrapper className={cx("menu-popper")}>
          {renderItems()}
        </PopperWrapper>
      </div>
    )}
  >
    {children}
  </Tippy>
   );
}

export default Menu;
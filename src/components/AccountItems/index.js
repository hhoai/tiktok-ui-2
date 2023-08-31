import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import { BsCheckCircleFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function AccountItem() {
  return ( 
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src ="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/775524e65decad6dc90ebac1cbf9ae7e~c5_100x100.jpeg?x-expires=1693620000&x-signature=2cr7AAB8mv4K331GjMFt8MsW3A0%3D" alt = "name" />
      <div className={cx("infor")}>
        <h4 className={cx("name")}>
          <span>
          Nguyen Van A
          </span>
          <BsCheckCircleFill className={cx("check")}/>
        </h4>
        <span className={cx("username")}>
          username
        </span>
      </div>
    </div>
  );
}

export default AccountItem;

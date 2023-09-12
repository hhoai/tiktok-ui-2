import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";

import { BsCheckCircleFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function AccountItem({data}) {
  return ( 
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src ={data.avatar} alt = {data.full_name} />
      <div className={cx("infor")}>
        <h4 className={cx("name")}>
          <span>
          {data.full_name}
          </span>
         {data.tick && <BsCheckCircleFill className={cx("check")}/>}
        </h4>
        <span className={cx("username")}>
          {data.nickname}
        </span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem;

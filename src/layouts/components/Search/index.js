import HeadlessTippy from "@tippyjs/react/headless";
import { useState, useEffect, useRef } from "react";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "./../../../components/AccountItems";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/services/searchService";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { BiLoaderCircle } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      // nvquang2
      const result = await searchServices.search(debounce);
      setSearchResult(result || []);

      setLoading(false);

      // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
      // .then(res => res.json())
      // .then ((res) => {
      //   setSearchResult(res.data);
      //   setLoading(false);
      // })
      // .catch(() => {
      //   setLoading(false);
      // })
    };

    fetchApi();
  }, [debounce]);

  const handleClear = () => {
    inputRef.current.focus();
    setSearchValue("");
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves 
    //this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(atts) => (
          <div className={cx("search-result")} tabIndex="-1" {...atts}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((rs) => (
                <AccountItem key={rs.id} data={rs} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos..."
            spellCheck={false}
            onChange={(e) => {
              e.target.value = e.target.value.trimStart();
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <IoIosCloseCircle />
            </button>
          )}
          <button className={cx("loading")}>
            {loading && <BiLoaderCircle />}
          </button>
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FaSearch />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

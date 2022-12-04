function NavExtra({ isLogin }) {
    return (
        <div className={cx('wrapper')}>
            {isLogin
                ? {
                      /* login btn */
                  }
                : {
                      /* not login btn */
                  }}
        </div>
    );
}

export default NavExtra;

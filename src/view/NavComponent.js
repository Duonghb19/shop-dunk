import "./scss/NavComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import logoHome from "../assets/img/0012445_Logo_ShopDunk.png";
import vn from "../assets/img/vn.png";
import us from "../assets/img/us.png";
import { BrowserRouter, Routers, Switch, Route, Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div className="header">
      <div className="header-page">
        <div className="container">
          <div className="header-top">
            <div class="icon-header-mobile">
              <label for="nav-mobile-input" class="nav__bars-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </label>
              <input
                hidden
                type="checkbox"
                name=""
                class="nav__input"
                id="nav-mobile-input"
              />
              <nav class="nav-mobile-input">
                <ul class="menu-list-mobile">
                  <li class="menu-item-link">
                    <Link to="../dang-ki">Tạo tài khoản ngay</Link>
                  </li>
                  <li class="menu-item-link">
                    <Link to="../dang-nhap">Đăng nhập</Link>
                  </li>
                  <li class="menu-item-link">
                    <Link to="">Dịch vụ</Link>
                  </li>
                  <li class="menu-item-link">
                    <Link to="/tin-tuc">Tin Tức</Link>
                  </li>
                  <li class="menu-item-link">
                    <a href="">Khuyến mại</a>
                  </li>
                  <li class="menu-item-link">
                    <a href=""> Ngôn ngữ </a>
                  </li>
                </ul>
              </nav>
              <div className="icon-language-res">
                <div className="icon-language-mobile">
                  <div className="icon-vn">
                    <a href="">
                      <img src={vn} alt="" />
                    </a>
                  </div>
                  <div className="icon-us">
                    <a href="">
                      <img src={us} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-nav">
              <div className="img-home-nav">
                <a href="/">
                  <img src={logoHome} alt="" />
                </a>
              </div>
            </div>
            <nav className="menu-nav ">
              <ul className="top-menu ">
                <li className="menu-items">
                  <Link to="/iphone"> iphone </Link>
                </li>
                <li className="menu-items">
                  <Link to="/iPad"> iPad </Link>
                </li>
                <li className="menu-items">
                  <Link to="/Mac"> Mac </Link>
                </li>
                <li className="menu-items">
                  <Link to="/Watch"> Watch </Link>
                </li>
                <li className="menu-items">
                  <Link to="/am-thanh"> Âm thanh </Link>
                </li>
                <li className="menu-items">
                  <Link to="/phu-kien"> Phụ kiện </Link>
                </li>
                <li className="topic-items">
                  <a href="/">
                    Dịch vụ
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </a>
                  <div className="child-menu">
                    <div className="child-menu-content">
                      <a href="/">Bảo Hành Uỷ Quyền Apple (ShopDunk Care)</a>
                      <a href="/">Tra cứu thần số học</a>
                      <a href="/">Trả Góp</a>
                      <a href="/">Thu Cũ Đổi Mới</a>
                      <a href="/">WorkShop</a>
                      <a href="/">MBTI</a>
                      <a href="/">Sim Thẻ</a>
                    </div>
                  </div>
                </li>
                <li className="menu-items">
                  <Link to="/tin-tuc">Tin Tức</Link>
                </li>
                <li className="menu-items">
                  <a href="/">Khuyến mại</a>
                </li>
              </ul>
            </nav>

            <div className="icon-nav">
              <div className="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
              <div className="icon-bag">
                <Link to="/gio-hang">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                </Link>
              </div>
              <div className="icon-user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <div className="icon-user-child">
                  <ul className="item-user-child">
                    <li className="item-child-user">
                      <Link to="../dang-ki">Tạo tài khoản ngay</Link>
                    </li>
                    <li className="item-child-user">
                      <Link to="../dang-nhap">Đăng nhập</Link>
                    </li>
                    <li className="item-child-user">
                      <a href="">Ngôn ngữ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="icon-language">
              <div className="icon-vn">
                <a href="">
                  <img src={vn} alt="" />
                </a>
              </div>
              <div className="icon-us">
                <a href="">
                  <img src={us} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-mobile">
        <ul class="item-mobile">
          <li className="menu-items-mobile">
            <Link to="/iphone"> iphone </Link>
          </li>
          <li className="menu-items-mobile">
            <Link to="/ipad"> iPad </Link>
          </li>
          <li className="menu-items-mobile">
            <Link to="/Mac"> Mac </Link>
          </li>
          <li className="menu-items-mobile">
            <Link to="/Watch"> Watch </Link>
          </li>
          <li className="menu-items-mobile">
            <Link to="/am-thanh"> Âm thanh </Link>
          </li>
          <li className="menu-items-mobile">
            <Link to="/phu-kien"> Phụ kiện </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavComponent;

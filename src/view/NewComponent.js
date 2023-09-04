import "./scss/NewComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import imgNew1 from "../assets/img/0019052_ipad-gen-9-va-gen-10_1600.jpeg";
import imgNew2 from "../assets/img/0019053_ipad-gen-10-co-may-mau_1600.png";
import icon1 from "../assets/img/icons/Icon-Apple.png";
import icon2 from "../assets/img/icons/Icon_Review_1.png";
import icon3 from "../assets/img/icons/Icon_News_2.png";
import icon4 from "../assets/img/icons/Icon_Tips.png";
import icon5 from "../assets/img/icons/news-discount.png";
import icon6 from "../assets/img/icons/news-others.png";
import icon7 from "../assets/img/icons/news-ivideo.png";
import iconCalendar from "../assets/img/icons/calendar.svg";
import videoTitle from "../assets/img/video-title.png";
import imgItem from "../assets/img/0019043_bat-che-do-dark-mode-thu-cong-trong-cai-dat_1600.png";
const NewComponent = () => {
  return (
    <>
      <NavComponent />
      <div className="news-home-page">
        <div className="container">
          <Breadcrumb
            className="Breadcrumb"
            items={[
              {
                href: "./",
                title: <HomeOutlined />,
              },
              {
                href: "/tin-tuc",
                title: (
                  <>
                    <span>Tin tức</span>
                  </>
                ),
              },
            ]}
          />
          <div className="news-body">
            <div className="title-news">
              <h1>Tin tức</h1>
            </div>
            <div className="news-img-all">
              <div className="news-img-child">
                <div className="img-news">
                  <a href="">
                    <img src={imgNew2} alt="" />
                  </a>
                </div>
                <div className="title-img">
                  <a href="">
                    4 lựa chọn màu sắc trên iPad Gen 10: Nên chọn màu nào?
                  </a>
                </div>
              </div>

              <div className="news-img-child-all">
                <div className="news-img-right">
                  <div className="img-news">
                    <a href="">
                      <img src={imgNew1} alt="" />
                    </a>
                  </div>
                  <div className="title-img img-right1">
                    <a href="">
                      4 lựa chọn màu sắc trên iPad Gen 10: Nên chọn màu nào?
                    </a>
                  </div>
                </div>
                <div className="news-img-right">
                  <div className="img-news">
                    <a href="">
                      <img src={imgNew1} alt="" />
                    </a>
                  </div>
                  <div className="title-img img-right2">
                    <a href="">
                      4 lựa chọn màu sắc trên iPad Gen 10: Nên chọn màu nào?
                    </a>
                  </div>
                </div>
              </div>
              <div className="cate-res">
                <div className="all_list-cate">
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon1} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>

                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon2} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon3} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon4} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon5} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon6} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                  <div className="list-cate">
                    <a href="" className="cate-name news-home-apple-news">
                      <img src={icon7} alt="" />
                    </a>
                    <a href="">Tin tức Apple</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Tin tức Apple</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Tin tức Apple</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Bài viết review</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Bài viết review</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Khám phá</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Khám phá</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Thủ thuật</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Thủ thuật</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Khuyến mại</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Khuyến mại</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>Tin khác</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả Tin khác</a>
            </div>
          </div>
          <div className="news-list-page">
            <h1>iVideo</h1>
            <div className="item-news-list-all">
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
              <div className="item-news-list">
                <div className="img-item-news">
                  <a href="">
                    <img src={imgItem} alt="" />
                  </a>
                </div>
                <div className="content-img">
                  <h3 className="title-news-item">
                    Chế độ Dark Mode là gì? Hướng dẫn bật tự động nhanh chóng!
                  </h3>
                  <div className="icon-item-new">
                    <img src={iconCalendar} alt="" />
                    <p>25/08/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-news-List">
              <a href="">Xem tất cả iVideo</a>
            </div>
          </div>
        </div>
        <div className="video-news-page">
          <div className="container">
            <img src={videoTitle} alt="" />
            <div className="video-news-all">
              <div className="video-item">
                <iframe
                  className="video1"
                  width="793"
                  height="504"
                  src="https://www.youtube.com/embed/69bFJeJiEDg?si=gd2yII1cxbaDz0Xt"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-item">
                <div className="video-item-child">
                  <iframe
                    className="video2"
                    width="314"
                    height="157"
                    src="https://www.youtube.com/embed/94ec9ETfps8?si=XKktN-LZoTSNQ1RJ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="video-item-child">
                  <iframe
                    className="video2"
                    width="314"
                    height="157"
                    src="https://www.youtube.com/embed/FDh8pYtMtIc?si=yO4nSMhY04jWTtEM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="video-item-child">
                  <iframe
                    className="video2"
                    width="314"
                    height="157"
                    src="https://www.youtube.com/embed/k1at0x4Ut1U?si=C9XjPG5smcNgQADT"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default NewComponent;

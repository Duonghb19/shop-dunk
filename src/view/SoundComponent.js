import "./scss/IphoneComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import banner1 from "../assets/img/PCjbl.png";
import banner2 from "../assets/img/PCmar.png";
import { Carousel } from "antd";
import { fetchAllProduct } from "../sevices/product";
import { useEffect, useState } from "react";
import filter1 from "../assets/img/Image-Standard-2.png";
import filter2 from "../assets/img/Image-Standard-3.png";
import user from "../assets/img/default-avatar_120.jpg";
import { Col, Divider, Row } from "antd";
import iconStar from "../assets/img/icons/icon-star-1.png";
import { Input } from "antd";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

const SoundComponent = () => {
  const [listProduct, setListProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  //call api
  const getProducts = async () => {
    let res = await fetchAllProduct();
    console.log("check res new:", res);
    if (res && res.products) {
      setListProducts(res.products);
    }
  };
  return (
    <>
      <NavComponent />
      <div className="container product-page">
        <Breadcrumb
          className="Breadcrumb"
          items={[
            {
              href: "./",
              title: <HomeOutlined />,
            },
            {
              href: "/ipad",
              title: (
                <>
                  <span>Âm thanh</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div className="home-page-product">
        <div className="container list-item-product">
          <div className="banner-product">
            <h1>Âm thanh</h1>
            <div className="banner-auto">
              <Carousel autoplay>
                <div className="img-banner">
                  <a href="/">
                    <img src={banner1} alt="" />
                  </a>
                </div>
                <div className="img-banner">
                  <a href="/">
                    <img src={banner2} alt="" />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="list-cate-product-all">
            <div className="list-width-product">
              <div className="list-cate-product">
                <div className="item-cate active">
                  <a href=""> Tất cả </a>
                </div>
                <div className="item-cate">
                  <a href=""> Airpods </a>
                </div>
                <div className="item-cate">
                  <a href=""> AirPods Pro </a>
                </div>
                <div className="item-cate">
                  <a href=""> EarPods </a>
                </div>
                <div className="item-cate">
                  <a href=""> Marshall </a>
                </div>
                <div className="item-cate">
                  <a href=""> Beats </a>
                </div>
                <div className="item-cate">
                  <a href=""> Harman Kardon </a>
                </div>
                <div className="item-cate">
                  <a href=""> JBL </a>
                </div>
                <div className="item-cate">
                  <a href=""> Google </a>
                </div>
                <div className="item-cate">
                  <a href=""> Sony </a>
                </div>
                <div className="item-cate">
                  <a href=""> Audio Technica </a>
                </div>
                <div className="item-cate">
                  <a href=""> Jabra </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-product">
            <div className="category-page">
              {listProduct &&
                listProduct.length > 0 &&
                listProduct
                  .filter((item) => item.category === "home-decoration")
                  .map((item, index) => {
                    return (
                      <div
                        className="item-category-page"
                        key={`product-${index}`}
                      >
                        <div className="img-product">
                          <Link to={`/${item.title}`}>
                            <img src={item.thumbnail} alt="" />
                          </Link>
                        </div>
                        <div className="name-product">
                          <h3>
                            <Link to={`/${item.title}`}>{item.title}</Link>
                          </h3>
                        </div>
                        <div className="number-price">
                          <span className="price-product">
                            {item.price} usd
                          </span>
                          <span className="discount">
                            -{item.discountPercentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="history-product">
            <p className="history-product-head">
              <h2>Thiết bị âm thanh - Mang lại trải nghiệm nghe nhạc cực đã</h2>
              <br />
            </p>
            <p className="history-product-body">
              Nghe nhạc, xem phim là nhu cầu thường ngày trong cuộc sống, giúp
              chúng ta thư giãn sau quãng thời gian học tập và làm việc căng
              thẳng. Tuy nhiên, để nâng cao trải nghiệm và có được những giây
              phút giải trí ấn tượng hơn, người dùng nên mua những
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>Các thiết bị âm thanh hiện đại đang có mặt tại ShopDunk?</h2>
              <br />
            </p>
            <p className="history-product-body">
              iPad được trang bị các tính năng tiện ích để phục vụ công việc,
              nhu cầu giải trí hiệu quả. Trên thực tế vai trò của iPad trong học
              tập hay làm việc cũng không hề nhỏ nhờ các tính năng:
            </p>
            <br />
            <br />
          </div>
          <div className="rate-product">
            <div className="title-rate">
              <h2>Đánh giá danh mục</h2>
            </div>
            <div className="row">
              <Row className="row-res">
                <Col span={8} className="rate-first">
                  <div className="rate-all">
                    <div className="number-rate-all">
                      <h1>5</h1>
                      <p>6 đánh giá</p>
                    </div>
                    <div className="percent-rate-all">
                      <div className="star-rate-all">
                        <p>5</p>
                        <img src={iconStar} alt="" />
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="star-rate-all">
                        <p>4</p>
                        <img src={iconStar} alt="" />
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="star-rate-all">
                        <p>3</p>
                        <img src={iconStar} alt="" />
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="star-rate-all">
                        <p>2</p>
                        <img src={iconStar} alt="" />
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="star-rate-all">
                        <p>1</p>
                        <img src={iconStar} alt="" />
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-rate">
                    <strong>Viết đánh giá của riêng bạn</strong>
                    <div className="quality">
                      <p>Chất lượng*:</p>
                      <span>
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                      </span>
                    </div>
                    <div className="form-input">
                      <label htmlFor="">Tên của bạn</label>
                      <Input />
                      <label htmlFor="">Đánh giá danh mục</label>
                      <Input />
                      <Button type="primary">Gửi</Button>
                    </div>
                  </div>
                </Col>
                <Col span={16}>
                  <div className="user-comment">
                    <div className="comment">
                      <div className="profile-comment">
                        <img src={user} alt="" />
                        <p className="name-user">Nguyenvanphuong</p>
                        <p className="date-review">- 26/07/2023</p>
                      </div>
                      <span className="rate-star">
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                      </span>
                      <p>Ok</p>
                    </div>
                    <div className="comment">
                      <div className="profile-comment">
                        <img src={user} alt="" />
                        <p className="name-user">Nguyenvanphuong</p>
                        <p className="date-review">- 26/07/2023</p>
                      </div>
                      <span className="rate-star">
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                        <img src={iconStar} alt="" />
                      </span>
                      <p>Ok</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="comment-post">
            <div className="title-comment">
              <h2>Bình luận</h2>
            </div>
            <Row className="row-comment">
              <Col span={8} className="comment-first">
                <p className="title-form-comment">
                  <strong>Viết bình luận của bạn</strong>
                </p>
                <div className="form-comment-post">
                  <div className="form-input">
                    <label htmlFor="">Tên của bạn</label>
                    <Input />
                    <label htmlFor="">Email hoặc số điện thoại</label>
                    <Input />
                    <label htmlFor="">Nội dung bình luận</label>
                    <Input />
                    <Button type="primary">Gửi</Button>
                  </div>
                </div>
              </Col>
              <Col span={16}>
                <div className="review">
                  <p className="notifi">
                    Hiện chưa có bình luận nào. Hãy trở thành người đầu tiên
                    bình luận !!!!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default SoundComponent;

import "./scss/IphoneComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import banner1 from "../assets/img/banner watch t8_Danh mục PC.jpg";
import banner2 from "../assets/img/danh mục iphone ipad t7-08.jpg";
import { Carousel } from "antd";
import { fetchAllProduct } from "../sevices/product";
import { useEffect, useState } from "react";
import filter1 from "../assets/img/Image-Standard-6.png";
import filter2 from "../assets/img/Image-Standard-7.png";
import user from "../assets/img/default-avatar_120.jpg";
import { Col, Divider, Row } from "antd";
import iconStar from "../assets/img/icons/icon-star-1.png";
import { Input } from "antd";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

const WatchComponent = () => {
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
              href: "/Watch",
              title: (
                <>
                  <span>Watch</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div className="home-page-product">
        <div className="container list-item-product">
          <div className="banner-product">
            <h1>Watch</h1>
            <div className="banner-auto">
              <Carousel autoplay>
                <div className="img-banner">
                  <a href="/">
                    <img src={banner1} alt="" />
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
                  <a href=""> Apple Watch Ultra </a>
                </div>
                <div className="item-cate">
                  <a href=""> Apple Watch Series 8 </a>
                </div>
                <div className="item-cate">
                  <a href=""> Apple Watch Series 7 </a>
                </div>
                <div className="item-cate">
                  <a href=""> Apple Watch Series 6 </a>
                </div>
                <div className="item-cate">
                  <a href=""> Apple Watch SE </a>
                </div>
                <div className="item-cate">
                  <a href=""> Apple Watch Series 3</a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-product">
            <div className="category-page">
              {listProduct &&
                listProduct.length > 0 &&
                listProduct
                  .filter((item) => item.category === "skincare")
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
          <div className="filter-all">
            <div className="filter-product">
              <div className="item-filter">
                <a href="">
                  <img src={filter1} alt="" />
                </a>
                <div className="title-filter">
                  <div className="title-child-filter">
                    <a href="">
                      Tìm Watch <br />
                      phù hợp với bạn
                    </a>
                  </div>
                  <a href="" className="compare">
                    So sánh các Watch ›
                  </a>
                </div>
              </div>
              <div className="item-filter">
                <a href="">
                  <img src={filter2} alt="" />
                </a>
                <div className="title-filter">
                  <div className="title-child-filter">
                    <a href="">
                      Phụ kiện Watch <br />
                      thường mua kèm
                    </a>
                  </div>
                  <a href="" className="compare">
                    Tìm phụ kiện ›
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="history-product">
            <p className="history-product-head">
              <h2>Apple Watch là gì?</h2>
              <br />
            </p>
            <p className="history-product-body">
              là dòng đồng hồ thông minh được tạo ra bởi Apple Inc., ra mắt ngày
              9 tháng 9 năm 2014 với 3 bộ sưu tập Apple Watch Sport, Apple
              Watch, Apple Watch Edition.
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>
                Các phiên bản đồng hồ thông minh đang có mặt tại ShopDunk?
              </h2>
              <br />
            </p>
            <p className="history-product-body">
              là phiên bản đặc biệt được Apple ra mắt nâng cấp hoàn hảo hơn
              Apple Watch Series 3. Màn hình bản SE lớn hơn 30% với 2 tùy chọn
              40mm và 44mm, chip Apple S5 hiệu năng mạnh gấp 2 lần chip S3 của
              Series 3.
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>Apple đã khai tử những dòng Watch nào?</h2>
              <br />
            </p>
            <p className="history-product-body">
              Tính đến nay, Apple đã khai tử (ngừng sản xuất) các dòng iPhone
              đời cũ bao gồm: iPhone 2G, iPhone 3G, iPhone 4, iPhone 5 series,
              iPhone 6 series, iPhone 7 series, iPhone 8 series, iPhone X
              series, iPhone SE (thế hệ 1), iPhone SE (thế hệ 2), iPhone 11 Pro,
              iPhone 11 Pro Max, iPhone 12 Pro, iPhone 12 Pro Max.
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
export default WatchComponent;

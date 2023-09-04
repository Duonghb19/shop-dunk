import "./scss/IphoneComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import banner1 from "../assets/img/Danh mục (4).jpg";
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

const AccessoryComponent = () => {
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
                  <span>Phụ kiện</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div className="home-page-product">
        <div className="container list-item-product">
          <div className="banner-product">
            <h1>Phụ kiện</h1>
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
                  <a href=""> Cường lực bảo vệ </a>
                </div>
                <div className="item-cate">
                  <a href=""> Sạc, cáp </a>
                </div>
                <div className="item-cate">
                  <a href=""> Bao da/ Ốp lưng </a>
                </div>
                <div className="item-cate">
                  <a href=""> Sạc dự phòng </a>
                </div>
                <div className="item-cate">
                  <a href=""> Balo/ Túi chống sốc </a>
                </div>
                <div className="item-cate">
                  <a href=""> Chuột/ Bàn phím </a>
                </div>
                <div className="item-cate">
                  <a href=""> Bút Apple Pencil </a>
                </div>
                <div className="item-cate">
                  <a href=""> Dây đeo Apple Watch</a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-product">
            <div className="category-page">
              {listProduct &&
                listProduct.length > 0 &&
                listProduct
                  .filter((item) => item.category === "groceries")
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
          <div className="filter-all"></div>
          <div className="history-product">
            <p className="history-product-head">
              <h2>Phụ kiện chính hãng là gì?</h2>
              <br />
            </p>
            <p className="history-product-body">
              là máy tính bảng do Apple Inc. phát triển. Được công bố vào ngày
              27 tháng 1 năm 2010, thiết bị này tạo ra một phân loại mới giữa
              điện thoại thông minh và máy tính xách tay.
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>Phụ kiện điện tử nào đang có mặt tại ShopDunk?</h2>
              <br />
            </p>
            <p className="history-product-body">
              là các phụ kiện đi kèm, hỗ trợ cho việc sử dụng các thiết bị điện
              tử như: điện thoại, laptop, máy tính bảng, đồng hồ thông minh,…
              được thuận tiện hơn. Các dòng phụ kiện mà ShopDunk đang cung cấp
              chủ yếu là các phụ kiện chuyên dùng cho các sản phẩm của hãng
              Apple như: iPhone, iPad, MacBook, Apple Watch,…, hiện đang có đa
              dạng và đầy đủ các loại phụ kiện khác nhau, phù hợp với từng dòng
              thiết bị điện tử như:
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>Apple đã khai tử những dòng ipad nào?</h2>
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
export default AccessoryComponent;

import "./scss/IphoneComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import banner1 from "../assets/img/danh mục iphone ipad t7-10.jpg";
import banner2 from "../assets/img/Danh mục PC.jpg";
import iconComparision from "../assets/img/icons/comparison.png";
import { Carousel } from "antd";
import { fetchAllProduct } from "../sevices/product";
import { useEffect, useState } from "react";
import filter1 from "../assets/img/Image-Standard.png";
import filter2 from "../assets/img/Image-Standard-1.png";
import user from "../assets/img/default-avatar_120.jpg";
import { Col, Divider, Row } from "antd";
import iconStar from "../assets/img/icons/icon-star-1.png";
import { Input } from "antd";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
const IphoneComponent = () => {
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
              href: "/iphone",
              title: (
                <>
                  <span>iPhone</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div className="home-page-product">
        <div className="container list-item-product">
          <div className="banner-product">
            <h1>iPhone</h1>
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
                  <a href=""> iPhone 14 series </a>
                </div>
                <div className="item-cate">
                  <a href=""> iPhone 13 series </a>
                </div>
                <div className="item-cate">
                  <a href=""> iPhone 12 series </a>
                </div>
                <div className="item-cate">
                  <a href=""> iPhone 11 series </a>
                </div>
                <div className="item-cate">
                  <a href=""> iPhone SE </a>
                </div>
              </div>
            </div>
            <div className="compare-product">
              <a href="">
                <img src={iconComparision} alt="" />
                So sánh iPhone
              </a>
            </div>
          </div>
          <div className="list-product">
            <div className="category-page">
              {listProduct &&
                listProduct.length > 0 &&
                listProduct
                  .filter((item) => item.category === "smartphones")
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
                      Tìm iPhone <br />
                      phù hợp với bạn
                    </a>
                  </div>
                  <a href="" className="compare">
                    So sánh các iPhone ›
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
                      Tìm iPhone <br />
                      phù hợp với bạn
                    </a>
                  </div>
                  <a href="" className="compare">
                    So sánh các iPhone ›
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="history-product">
            <p className="history-product-head">
              <h2>Lịch sử hình thành, phát triển của iPhone</h2>
              <br />
            </p>
            <p className="history-product-body">
              iPhone là dòng điện thoại thông minh được phát triển từ Apple Inc,
              được ra mắt lần đầu tiên bởi Steve Jobs và mở bán năm 2007. Bên
              cạnh tính năng của một máy điện thoại thông thường, iPhone còn
              được trang bị màn hình cảm ứng, camera, khả năng chơi nhạc và
              chiếu phim, trình duyệt web... Phiên bản thứ hai là iPhone 3G ra
              mắt tháng 7 năm 2008, được trang bị thêm hệ thống định vị toàn
              cầu, mạng 3G tốc độ cao. Trải qua 15 năm tính đến nay đã có đến 34
              mẫu iPhone được sản xuất từ dòng 2G cho đến iPhone 13 Pro Max và
              Apple là một trong những thương hiệu điện thoại được yêu thích và
              sử dụng phổ biến nhất trên thế giới.
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>iPhone có những mã máy nào?</h2>
              <br />
            </p>
            <p className="history-product-body">
              Những chiếc iPhone do Apple phân phối tại thị trường nước nào thì
              sẽ mang mã của nước đó. Ví dụ: LL: Mỹ, ZA: Singapore, TH: Thái
              Lan, JA: Nhật Bản, Những mã này xuất hiện tại Việt Nam đều là hàng
              xách tay, nhập khẩu. Còn tại Việt Nam, iPhone sẽ được mang mã
              VN/A. Tất cả các mã này đều là hàng chính hãng phân phối của
              Apple. Lợi thế khi bạn sử dụng iPhone mã VN/A đó là chế độ bảo
              hành tốt hơn với 12 tháng theo tiêu chuẩn của Apple. iPhone của
              bạn sẽ được bảo hành tại tất cả các trung tâm bảo hành Apple tại
              Việt Nam, một số mã quốc tế bị từ chối bảo hành và phải đem ra các
              trung tâm bảo hành Apple tại nước ngoài. Rất là phức tạp đúng
              không nào?
            </p>
            <br />
            <br />
            <p className="history-product-head">
              <h2>Apple đã khai tử những dòng iPhone nào?</h2>
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
export default IphoneComponent;

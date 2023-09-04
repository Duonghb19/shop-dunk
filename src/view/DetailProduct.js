import FooterComponent from "./FooterComponent";
import NavComponent from "./NavComponent";
import "./scss/DetailProduct.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllProduct } from "../sevices/product";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import iconStar from "../assets/img/icons/icon-star-1.png";
import { Radio } from "antd";
import tick from "../assets/img/tích tròn (1).jpg";
import { Button, Space } from "antd";
import imageg1 from "../assets/img/0002732_bao-da-smart-folio-for-ipad-air-4th_240.jpeg";
import imageg2 from "../assets/img/0001831_pin-sac-du-phong-yoobao-10000mah_240.jpeg";
import imageg3 from "../assets/img/0001395_sac-20w-usb-c-power-adapter_240.png";
import imageg4 from "../assets/img/0016508_cu-sac-belkin-65w-2-cong-usb-c-pd-30-pps-gan-trang_240.jpeg";
import user from "../assets/img/default-avatar_120.jpg";
import { Input } from "antd";
import CartComponent from "./CartComponent";
const DetailProduct = () => {
  const [cart, setCart] = useState([]);

  const [listProduct, setListProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  //call api
  const getProducts = async () => {
    let res = await fetchAllProduct();
    if (res && res.products) {
      setListProducts(res.products);
    }
  };
  let { title } = useParams();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [isDown, setIsDown] = useState(null);
  const addDown = (option) => {
    if (isDown === option) {
      setIsDown(null);
    } else {
      setIsDown(option);
    }
  };
  return (
    <>
      <NavComponent />

      <div className="container details-product-page">
        <Breadcrumb
          className="Breadcrumb"
          items={[
            {
              href: "./",
              title: <HomeOutlined />,
            },
            {
              path: "/",
              title: (
                <>
                  <span>{title}</span>
                </>
              ),
            },
          ]}
        />
        <div className="details-product">
          {listProduct &&
            listProduct.length > 0 &&
            listProduct
              .filter((item) => item.title === title)
              .map((item, index) => {
                const handelClick = () => {
                  cart.push(item);
                  console.log(cart);
                };

                return (
                  <div className="item-product" key={index}>
                    <div className="detail-product-intro">
                      <Row className="row-all-product">
                        <Col span={12} className="responsive-product">
                          <div className="content-left">
                            <div className="img-head-product">
                              <div className="img-head-intro">
                                <a href="">
                                  <img src={item.images[currentImageIndex]} />
                                </a>
                              </div>
                            </div>
                            <div className="img-child-res">
                              <div className="img-child-intro img-fix">
                                {item.images.map((image, index) => (
                                  <img
                                    key={index}
                                    src={image}
                                    className={
                                      index === currentImageIndex
                                        ? "active-img"
                                        : ""
                                    }
                                    onClick={() => handleImageClick(index)}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col span={12} className="col-title-product">
                          <div className="infomation1-cn">
                            <div className="infomation1">
                              <span className="title-product">
                                <h2>{item.title}</h2>
                              </span>
                              <div className="rate-all">
                                <span className="rate-star">
                                  <img src={iconStar} alt="" />
                                  <img src={iconStar} alt="" />
                                  <img src={iconStar} alt="" />
                                  <img src={iconStar} alt="" />
                                  <img src={iconStar} alt="" />
                                </span>
                                <span className="title-rate">
                                  <a href="">Đánh giá </a>
                                </span>
                                <span className="title-mid">|</span>
                                <span className="title-compare">
                                  <a href="">So sánh</a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="infomation2-cn">
                            <span className="price">
                              <h1>{item.price} usd</h1>
                              <h2>{item.discountPercentage} %</h2>
                            </span>
                            <div className="choose-color">
                              <div className="color-product">
                                <span>Chọn màu sắc :</span>
                              </div>
                              <div className="img-child-res">
                                <div className="img-child-intro">
                                  <div className="img-child-intro img-fix img-child-fix">
                                    {item.images.map((image, index) => (
                                      <img
                                        key={index}
                                        src={image}
                                        className={
                                          index === currentImageIndex
                                            ? "active-img"
                                            : ""
                                        }
                                        onClick={() => handleImageClick(index)}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="short-des">
                            <div className="sale">
                              <p>Khuyến mại</p>
                              <Radio.Group
                                onChange={onChange}
                                value={value}
                                className="radio-button"
                              >
                                <Radio value={1} className="value-radio">
                                  trả thẳng
                                </Radio>{" "}
                                <br />
                                <Radio value={2} className="value-radio">
                                  Trả góp 0%
                                </Radio>
                              </Radio.Group>
                            </div>
                            <div className="endow">
                              <p>Ưu đãi</p>
                              <div className="titlle-endow">
                                <p>
                                  {" "}
                                  <strong>
                                    Chào Tân Sinh Viên (1/8 - 31/8){" "}
                                  </strong>
                                  <span>
                                    <a href="">(xem chi tiết)</a>
                                  </span>
                                </p>
                                <p className="tick">
                                  <img src={tick} alt="" />
                                  <span>
                                    {" "}
                                    Thi tốt quà to - Đỗ cao giảm khủng đến{" "}
                                    <strong>500.000đ</strong>
                                  </span>
                                </p>
                                <p className="tick">
                                  <img src={tick} alt="" />
                                  <span>
                                    {" "}
                                    Giảm <strong>200.000đ </strong>cho khách
                                    hàng là HS-SV
                                  </span>
                                  <span>
                                    <a href="">(xem chi tiết)</a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="shop-sub">
                            <a href="">Xem cửa hàng có sẵn sản phẩm</a>
                          </div>
                          <div className="button-buy">
                            <Row>
                              <Col span={24}>
                                <Button
                                  className="Col24-btn"
                                  type="primary"
                                  onClick={handelClick}
                                >
                                  Mua ngay
                                </Button>
                              </Col>
                            </Row>
                            <Row className="Row-btn">
                              <Col span={11}>
                                <Button className="Col10-btn" type="primary">
                                  Trả góp
                                </Button>
                              </Col>
                              <Col span={11}>
                                <Button className="Col10-btn" type="primary">
                                  Thu cũ đổi mới
                                </Button>
                              </Col>
                            </Row>
                          </div>
                          <div className="details-item">
                            <ul>
                              <li>
                                Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Máy iPad,
                                Cáp
                              </li>
                              <li>
                                Bảo hành chính hãng 1 năm{" "}
                                <a href="">
                                  <strong>(chi tiết)</strong>
                                </a>
                              </li>
                              <li>
                                Giao hàng nhanh toàn quốc{" "}
                                <a href="">
                                  <strong>(chi tiết)</strong>
                                </a>
                              </li>
                              <li>
                                Hoàn thuế cho người nước ngoài
                                <a href="">
                                  <strong> (chi tiết)</strong>
                                </a>
                              </li>
                              <li>
                                Gọi đặt mua{" "}
                                <a href="">
                                  <strong>1900.6626 </strong>
                                </a>
                                (8:00 - 22:00)
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="product-grid">
          <div className="title">
            <strong>Gợi ý phụ kiện đi kèm</strong>
          </div>
          <div className="product-grid-res">
            <div className="product-grid-all">
              <div className="product-grid-item">
                <img src={imageg1} alt="" />
                <p className="title-grid">
                  <a href="">Bao da Smart Folio for iPad Air 4th</a>
                </p>
                <span className="price-grid">2.690.000₫</span>
                <span className="discount-grid">750.000₫</span>
              </div>
              <div className="product-grid-item">
                <img src={imageg2} alt="" />
                <p className="title-grid">
                  <a href="">Bao da Smart Folio for iPad Air 4th</a>
                </p>
                <span className="price-grid">2.690.000₫</span>
                <span className="discount-grid">750.000₫</span>
              </div>
              <div className="product-grid-item">
                <img src={imageg3} alt="" />
                <p className="title-grid">
                  <a href="">Bao da Smart Folio for iPad Air 4th</a>
                </p>
                <span className="price-grid">2.690.000₫</span>
                <span className="discount-grid">750.000₫</span>
              </div>
              <div className="product-grid-item">
                <img src={imageg4} alt="" />
                <p className="title-grid">
                  <a href="">Bao da Smart Folio for iPad Air 4th</a>
                </p>
                <span className="price-grid">2.690.000₫</span>
                <span className="discount-grid">750.000₫</span>
              </div>
            </div>
          </div>
        </div>

        <div className="information-product">
          <div className="item-information-product">
            <div className="title-info-product">
              <span onClick={() => addDown("option1")}>Mô tả sản phẩm</span>
              <span onClick={() => addDown("option2")}>Thông số kỹ thuật</span>
              <span onClick={() => addDown("option3")}>Chi tiết sản phẩm</span>
              <span onClick={() => addDown("option4")}>Hỏi đáp</span>
            </div>
            <div className="header1-cn-add1">
              {isDown === "option1" && (
                <div className="down-app">
                  <p>
                    <span>
                      <strong>iPad Air 2020.</strong>
                      Màn hình Liquid Retina 10.9 inch tuyệt đẹp và công nghệ
                      True Tone cho bạn những trải nghiệm thị giác thật dễ chịu.
                      Chip A14 Bionic mới cùng công nghệ Neural Engine là nền
                      tảng sức mạnh giúp bạn biên tập video 4K, soạn nhạc và
                      giải trí cùng các trò chơi đẳng cấp, mọi tác vụ đều trở
                      nên vô cùng đơn giản. Touch ID nhanh nhạy và dễ sử dụng
                      với tính năng bảo mật cao, hệ thống camera hiện đại,
                      USB-C, hỗ trợ đa dạng phụ kiện kể cả Magic Keyboard và
                      Apple Pencil (thế hệ thứ 2).
                    </span>
                  </p>
                  <p>
                    <strong>Tính năng nổi bật</strong>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Màn hình Liquid Retina 10.9 inch sắc nét với True Tone
                        và dải màu rộng P3
                      </li>
                      <li>Chip A14 Bionic với Neural Engine</li>
                      <li>Xác thực bảo mật với Touch ID</li>
                      <li>Camera sau 12MP, camera trước FaceTime HD 7MP</li>
                      <li>
                        Hiện có các màu Bạc, Xám Bạc, Hồng Kim, Xanh Lá và Xanh
                        Da Trời
                      </li>
                      <li>Âm thanh stereo rộng</li>
                      <li>Wi-Fi 6 (802.11ax) và dữ liệu di động LTE Gigabit</li>
                      <li>Thời lượng pin lên đến 10 giờ</li>
                      <li>Cổng kết nối USB-C để sạc và kết nối phụ kiện</li>
                      <li>
                        Hỗ trợ Magic Keyboard, Smart Keyboard Folio và Apple
                        Pencil (thế hệ thứ 2)
                      </li>
                      <li>
                        iPadOS 14 mang đến cho bạn các chức năng mới được thiết
                        kế dành riêng cho iPad
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>Bộ sản phẩm bao gồm </strong>
                  </p>
                  <p>
                    {" "}
                    Máy tính bảng. Dây sạc. Củ sạc 20W. HDSD bảo hành điện tử 12
                    tháng
                  </p>
                  <p>
                    <strong>Các thông tin Apple đảm bảo ( Pháp lý )</strong>
                  </p>
                  <p>
                    Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật,
                    kích thước màn hình iPad Air (thế hệ thứ 4) là 10.86 inch
                    theo đường chéo. Diện tích hiển thị thực tế nhỏ hơn. Không
                    bán kèm phụ kiện. Khả năng tương thích tùy thuộc thế hệ sản
                    phẩm.Thời lượng pin khác nhau tùy theo cách sử dụng và cấu
                    hình. Truy cập để biết thêm thông tin. Cần có gói cước dữ
                    liệu. Mạng LTE Gigabit, 4G LTE Advanced, 4G LTE và gọi Wi-Fi
                    chỉ khả dụng ở một số thị trường và được cung cấp qua một số
                    nhà mạng. Tốc độ phụ thuộc vào thông lượng lý thuyết và có
                    thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về
                    hỗ trợ mạng LTE, vui lòng liên hệ nhà mạng và truy cập
                  </p>
                </div>
              )}
            </div>
            <div className="header1-cn-add1">
              {isDown === "option2" && (
                <div className="down-app">
                  <div className="parameter">
                    <div className="parameter-even">
                      <Row className="Row-even">
                        <Col span={12}>
                          <strong>Hệ điều hành & CPU</strong>
                        </Col>
                        <Col span={12}>
                          <p>
                            <strong>Hệ điều hành:</strong>
                          </p>
                          <p>iPadOS 15</p>
                          <p>
                            <strong>Chip xử lý (CPU):</strong>
                          </p>
                          <p>Apple A14 Bionic 6 nhân</p>
                          <p>
                            <strong>Tốc độ CPU:</strong>
                          </p>
                          <p>2 nhân 3.0 GHz & 4 nhân 1.8 GHz</p>
                          <p>
                            <strong>Chip đồ hoạ (GPU):</strong>
                          </p>
                          <p>Apple GPU 4 nhân</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="parameter-old">
                      <Row className="Row-old">
                        <Col span={12}>
                          <strong>Bộ nhớ trong:</strong>
                        </Col>
                        <Col span={12}>
                          <p>
                            <strong>Hệ điều hành:</strong>
                          </p>
                          <p>iPadOS 15</p>
                          <p>
                            <strong>Chip xử lý (CPU):</strong>
                          </p>
                          <p>Apple A14 Bionic 6 nhân</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="parameter-even">
                      <Row className="Row-even">
                        <Col span={12}>
                          <strong>Kết nối:</strong>
                        </Col>
                        <Col span={12}>
                          <p>
                            <strong>Hệ điều hành:</strong>
                          </p>
                          <p>iPadOS 15</p>
                          <p>
                            <strong>Chip xử lý (CPU):</strong>
                          </p>
                          <p>Apple A14 Bionic 6 nhân</p>
                          <p>
                            <strong>Tốc độ CPU:</strong>
                          </p>
                          <p>2 nhân 3.0 GHz & 4 nhân 1.8 GHz</p>
                          <p>
                            <strong>Chip đồ hoạ (GPU):</strong>
                          </p>
                          <p>Apple GPU 4 nhân</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="parameter-old">
                      <Row className="Row-old">
                        <Col span={12}>
                          <strong>Tiện ích đặc biệt:</strong>
                        </Col>
                        <Col span={12}>
                          <p>
                            <strong>Hệ điều hành:</strong>
                          </p>
                          <p>iPadOS 15</p>
                          <p>
                            <strong>Chip xử lý (CPU):</strong>
                          </p>
                          <p>Apple A14 Bionic 6 nhân</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="header1-cn-add1">
              {isDown === "option3" && (
                <div className="down-app">
                  <p>
                    <span>
                      <strong>iPad Air 2020.</strong>
                      Màn hình Liquid Retina 10.9 inch tuyệt đẹp và công nghệ
                      True Tone cho bạn những trải nghiệm thị giác thật dễ chịu.
                      Chip A14 Bionic mới cùng công nghệ Neural Engine là nền
                      tảng sức mạnh giúp bạn biên tập video 4K, soạn nhạc và
                      giải trí cùng các trò chơi đẳng cấp, mọi tác vụ đều trở
                      nên vô cùng đơn giản. Touch ID nhanh nhạy và dễ sử dụng
                      với tính năng bảo mật cao, hệ thống camera hiện đại,
                      USB-C, hỗ trợ đa dạng phụ kiện kể cả Magic Keyboard và
                      Apple Pencil (thế hệ thứ 2).
                    </span>
                  </p>
                  <p>
                    <strong>Tính năng nổi bật</strong>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Màn hình Liquid Retina 10.9 inch sắc nét với True Tone
                        và dải màu rộng P3
                      </li>
                      <li>Chip A14 Bionic với Neural Engine</li>
                      <li>Xác thực bảo mật với Touch ID</li>
                      <li>Camera sau 12MP, camera trước FaceTime HD 7MP</li>
                      <li>
                        Hiện có các màu Bạc, Xám Bạc, Hồng Kim, Xanh Lá và Xanh
                        Da Trời
                      </li>
                      <li>Âm thanh stereo rộng</li>
                      <li>Wi-Fi 6 (802.11ax) và dữ liệu di động LTE Gigabit</li>
                      <li>Thời lượng pin lên đến 10 giờ</li>
                      <li>Cổng kết nối USB-C để sạc và kết nối phụ kiện</li>
                      <li>
                        Hỗ trợ Magic Keyboard, Smart Keyboard Folio và Apple
                        Pencil (thế hệ thứ 2)
                      </li>
                      <li>
                        iPadOS 14 mang đến cho bạn các chức năng mới được thiết
                        kế dành riêng cho iPad
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>Bộ sản phẩm bao gồm </strong>
                  </p>
                  <p>
                    {" "}
                    Máy tính bảng. Dây sạc. Củ sạc 20W. HDSD bảo hành điện tử 12
                    tháng
                  </p>
                  <p>
                    <strong>Các thông tin Apple đảm bảo ( Pháp lý )</strong>
                  </p>
                  <p>
                    Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật,
                    kích thước màn hình iPad Air (thế hệ thứ 4) là 10.86 inch
                    theo đường chéo. Diện tích hiển thị thực tế nhỏ hơn. Không
                    bán kèm phụ kiện. Khả năng tương thích tùy thuộc thế hệ sản
                    phẩm.Thời lượng pin khác nhau tùy theo cách sử dụng và cấu
                    hình. Truy cập để biết thêm thông tin. Cần có gói cước dữ
                    liệu. Mạng LTE Gigabit, 4G LTE Advanced, 4G LTE và gọi Wi-Fi
                    chỉ khả dụng ở một số thị trường và được cung cấp qua một số
                    nhà mạng. Tốc độ phụ thuộc vào thông lượng lý thuyết và có
                    thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về
                    hỗ trợ mạng LTE, vui lòng liên hệ nhà mạng và truy cập
                  </p>
                </div>
              )}
            </div>
            <div className="header1-cn-add1">
              {isDown === "option4" && (
                <div className="down-app">
                  <div className="rate-product">
                    <div className="title-rate">
                      <h2>Đánh giá sản phẩm</h2>
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
                            Hiện chưa có bình luận nào. Hãy trở thành người đầu
                            tiên bình luận !!!!
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default DetailProduct;

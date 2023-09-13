import "./scss/CartComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb, Row, Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import imageg1 from "../assets/img/0002732_bao-da-smart-folio-for-ipad-air-4th_240.jpeg";
import imageg2 from "../assets/img/0001831_pin-sac-du-phong-yoobao-10000mah_240.jpeg";
import imageg3 from "../assets/img/0001395_sac-20w-usb-c-power-adapter_240.png";
import imageg4 from "../assets/img/0016508_cu-sac-belkin-65w-2-cong-usb-c-pd-30-pps-gan-trang_240.jpeg";
import { Radio } from "antd";
import { fetchAllProduct } from "../sevices/product";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { Checkbox } from "antd";
import logo1 from "../assets/img/logo.jpg";
import logo2 from "../assets/img/logo (1).jpg";
import logo3 from "../assets/img/logo (2).jpg";
import logo4 from "../assets/img/logo (3).jpg";
import { Button, Space } from "antd";
import DetailProduct from "./DetailProduct";
const CartComponent = () => {
  const [listProduct, setListProducts] = useState([]);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  let { title } = useParams();
  //call api
  const getProducts = async () => {
    let res = await fetchAllProduct();
    if (res && res.products) {
      setListProducts(res.products);
    }
  };
  return (
    <>
      <NavComponent />
      <div className="cart-home-page">
        <div className="container">
          <div className="cart-home">
            <Breadcrumb
              className="Breadcrumb"
              items={[
                {
                  href: "./",
                  title: <HomeOutlined />,
                },
                {
                  href: "/gio-hang",
                  title: (
                    <>
                      <span>Giỏ hàng</span>
                    </>
                  ),
                },
              ]}
            />
            <Row className="Row-cart">
              <Col span={17} className="Col17-res">
                <div className="cart-body">
                  {listProduct &&
                    listProduct.length > 0 &&
                    listProduct
                      .filter((item) => item.title === title)
                      .map((item, index) => {})}
                  <div className="no-data">
                    <span>Giỏ hàng của bạn đang trống!</span>
                  </div>
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

                <div className="information-buy">
                  <div className="title">
                    <strong>Thông tin thanh toán</strong>
                  </div>
                  <div className="title-info-buy">
                    <p>
                      Đăng nhập ngay để nhận được “điểm thưởng” hấp dẫn khi mua
                      hàng thành công các sản phẩm tại ShopDunk
                    </p>
                    <Link to={"../dang-nhap"}>Đăng nhập ngay</Link>
                  </div>
                </div>
                <div className="address-buy">
                  <p>Giao tận nơi</p>
                  <div className="form-input-user">
                    <input
                      type="text"
                      placeholder="Tên"
                      className="text-name"
                    />
                    <div className="phone-email">
                      <input type="text" placeholder="Số điện thoại" />
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>

                  <div className="form-input-address">
                    <p>Hình thức nhận hàng</p>
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Nhận tại cửa hàng</Radio>
                      <Radio value={2}>Giao tận nơi</Radio>
                    </Radio.Group>
                    <br />
                    <div className="select-form-input-all">
                      <div className="select-form-input">
                        <span className="address">Tỉnh, thành phố:</span>
                        <Select
                          showSearch
                          className="select-input"
                          placeholder="Chọn tỉnh, thành phố"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Hà Nội",
                            },
                            {
                              value: "2",
                              label: "Thành phố Hồ Chí Minh",
                            },
                            {
                              value: "3",
                              label: "Đà Nẵng",
                            },
                            {
                              value: "4",
                              label: "Hải Phòng",
                            },
                            {
                              value: "5",
                              label: "Cần Thơ",
                            },
                            {
                              value: "6",
                              label: "An Giang",
                            },
                          ]}
                        />
                      </div>
                      <div className="select-form-input">
                        <span className="address">Quận, huyện:</span>
                        <Select
                          showSearch
                          className="select-input"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
                          }
                          options={[
                            {
                              value: "1",
                              label: "Hà Nội",
                            },
                            {
                              value: "2",
                              label: "Thành phố Hồ Chí Minh",
                            },
                            {
                              value: "3",
                              label: "Đà Nẵng",
                            },
                            {
                              value: "4",
                              label: "Hải Phòng",
                            },
                            {
                              value: "5",
                              label: "Cần Thơ",
                            },
                            {
                              value: "6",
                              label: "An Giang",
                            },
                          ]}
                        />
                      </div>
                    </div>
                    <Select
                      showSearch
                      className="select-input"
                      placeholder="Mời bạn chọn địa chỉ cửa hàng"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                    />
                    <Checkbox>Xuất hoá đơn công ty</Checkbox>
                  </div>
                </div>

                <div className="cate-buy">
                  <p>Thông tin thanh toán</p>
                  <span>
                    Quý khách vui lòng lựa chọn các hình thức thanh toán dưới
                    đây:
                  </span>

                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={5} className="radio-cate">
                      {" "}
                      <img src={logo1} alt="" /> Thanh toán Kredivo
                    </Radio>
                    <Radio value={6} className="radio-cate">
                      {" "}
                      <img src={logo2} alt="" /> Thanh toán OnePay
                    </Radio>
                    <Radio value={3} className="radio-cate">
                      {" "}
                      <img src={logo3} alt="" /> Thanh toán Payoo
                    </Radio>
                    <Radio value={4} className="radio-cate">
                      {" "}
                      <img src={logo4} alt="" /> Chuyển khoản ngân hàng
                    </Radio>
                  </Radio.Group>
                </div>
              </Col>
              <Col span={6} className="Col-order">
                <div className="order">
                  <div className="form-signin">
                    <input type="text" placeholder="Mã giảm giá" />
                    <button className="btn-order">Áp dụng</button>
                  </div>

                  <div className="total-price">
                    <div className="order-price">
                      <p className="Subtotal">Tổng phụ: </p>
                      <p className="Price-Subtotal">26.222.222 vnd</p>
                    </div>

                    <div className="order-total">
                      <p className="total">Tổng cộng: </p>
                      <p className="Price-total">26.222.222 vnd</p>
                    </div>
                  </div>
                  <Checkbox className="checkbox">
                    Tôi đã đọc và đồng ý với{" "}
                    <a href="">điều khoản và điều kiện</a> của website
                  </Checkbox>
                  <Button type="primary" className="checkout-button">
                    {" "}
                    Tiến hành đặt hàng{" "}
                  </Button>
                  <p className="note-ck">
                    (*) Phí phụ thu sẽ được tính khi bạn tiến hành thanh toán.
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
export default CartComponent;

import "./scss/HomeComponent.scss";
import "./scss/reset.scss";
import NavComponent from "../view/NavComponent";
import FooterComponent from "../view/FooterComponent";
import { useEffect, useState } from "react";
import { Carousel } from "antd";
import banner1 from "../assets/img/banner apple pay_Banner PC.jpg";
import banner2 from "../assets/img/banner ipad gen 9 t8_Banner PC.jpg";
import banner3 from "../assets/img/banner iphone 14 Pro Max T8_Banner PC.jpg";
import banner4 from "../assets/img/banner macbook air t8_Banner PC.jpg";
import banner5 from "../assets/img/banner watch t8_Banner PC.jpg";
import banner6 from "../assets/img/Banner Web_SD_VN.png";
import banner7 from "../assets/img/PC_s.png";
import topic1 from "../assets/img/Bonus banner-16.png";
import topic2 from "../assets/img/Bonus banner-26.png";
import topic3 from "../assets/img/BONUSt7.png";
import bannerBottom from "../assets/img/2.jpeg";
import { fetchAllProduct } from "../sevices/product";
import { Link } from "react-router-dom";
const HomeComponent = () => {
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
    <div className="wrapper-page">
      <NavComponent />
      <div className="page-home-body">
        <div className="banner-header">
          <Carousel autoplay>
            <div className="img-banner">
              <a href="/">
                <img src={banner7} alt="" />
              </a>
            </div>
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
            <div className="img-banner">
              <a href="/">
                <img src={banner3} alt="" />
              </a>
            </div>
            <div className="img-banner">
              <a href="/">
                <img src={banner4} alt="" />
              </a>
            </div>
            <div className="img-banner">
              <a href="/">
                <img src={banner5} alt="" />
              </a>
            </div>
            <div className="img-banner">
              <a href="/">
                <img src={banner6} alt="" />
              </a>
            </div>
          </Carousel>
        </div>
        <div className="content_home-page">
          <div className="container">
            <div className="topic-home">
              <div className="img-topic">
                <a href="/">
                  <img src={topic1} alt="" />
                </a>
              </div>
              <div className="img-topic">
                <a href="/">
                  <img src={topic2} alt="" />
                </a>
              </div>
              <div className="img-topic">
                <a href="/">
                  <img src={topic3} alt="" />
                </a>
              </div>
            </div>
            <div className="home-page-category-list">
              <div className="item-list">
                <div className="category-item">
                  <h2 className="title">
                    <a href="">iphone</a>
                  </h2>
                  <div className="category-page">
                    {listProduct &&
                      listProduct.length > 0 &&
                      listProduct
                        .filter((item) => item.category === "smartphones")
                        .slice(0, 4)
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
                                  <Link to={`/${item.title}`}>
                                    {item.title}
                                  </Link>
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
                  <div className="show-all">
                    <p>
                      <Link to="./iphone"> Xem tất cả iPhone </Link>
                    </p>
                  </div>
                </div>
                <div className="category-item">
                  <h2 className="title">
                    <a href="">ipad</a>
                  </h2>
                  <div className="category-page">
                    {listProduct &&
                      listProduct.length > 0 &&
                      listProduct
                        .filter((item) => item.category === "smartphones")
                        .slice(1, 6)
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
                                  <Link to={`/${item.title}`}>
                                    {item.title}
                                  </Link>
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
                  <div className="show-all">
                    <p>
                      <Link to="./ipad"> Xem tất cả ipad </Link>
                    </p>
                  </div>
                </div>
                <div className="category-item">
                  <h2 className="title">
                    <a href="">Mac</a>
                  </h2>
                  <div className="category-page">
                    {listProduct &&
                      listProduct.length > 0 &&
                      listProduct
                        .filter((item) => item.category === "laptops")
                        .slice(0, 4)
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
                                  <Link to={`/${item.title}`}>
                                    {item.title}
                                  </Link>
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
                  <div className="show-all">
                    <p>
                      <Link to="./Mac"> Xem tất cả Mac </Link>
                    </p>
                  </div>
                </div>
                <div className="category-item">
                  <h2 className="title">
                    <a href="">Watch</a>
                  </h2>
                  <div className="category-page">
                    {listProduct &&
                      listProduct.length > 0 &&
                      listProduct
                        .filter((item) => item.category === "laptops")
                        .slice(1, 6)
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
                                  <Link to={`/${item.title}`}>
                                    {item.title}
                                  </Link>
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
                  <div className="show-all">
                    <p>
                      <Link to="./Watch"> Xem tất cả Watch </Link>
                    </p>
                  </div>
                </div>
                <div className="category-item">
                  <h2 className="title">
                    <a href=""> Phụ kiện </a>
                  </h2>
                  <div className="category-page">
                    {listProduct &&
                      listProduct.length > 0 &&
                      listProduct
                        .filter((item) => item.category === "fragrances")
                        .slice(0, 4)
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
                                  <Link to={`/${item.title}`}>
                                    {item.title}
                                  </Link>
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
                  <div className="show-all">
                    <p>
                      <Link to="./phu-kien"> Xem tất cả Phụ kiện </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-home-bottom">
              <div className="img-banner-bottom">
                <a href="/">
                  <img src={bannerBottom} alt="" />
                </a>
              </div>
            </div>
            <div className="category-item">
              <h2 className="title">
                <a href=""> Tin Tức </a>
              </h2>
              <div className="category-page">
                {listProduct &&
                  listProduct.length > 0 &&
                  listProduct
                    .filter((item) => item.category === "fragrances")
                    .slice(0, 4)
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
                              <Link to={`/${item.title}`}>
                                {item.description}
                              </Link>
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
              <div className="show-all">
                <p>
                  <Link to="./tin-tuc"> Xem tất cả Tin Tức </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
export default HomeComponent;

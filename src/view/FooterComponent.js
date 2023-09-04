import "./scss/FooterComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import logoHome from "../assets/img/0012445_Logo_ShopDunk.png";
import face from "../assets/img/Face.png";
import youtube from "../assets/img/Youtube.png";
import zalo from "../assets/img/Zalo.png";
import bocongthuong from "../assets/img/Bocongthuong.png";
const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-page">
        <div className="footer-newletter">
          <div className="title-footer-newletter">
            <h2>Đăng ký nhận tin từ ShopDunk</h2>
          </div>
          <p className="des-footer-newletter">
            Thông tin sản phẩm mới nhất và chương trình khuyến mãi
          </p>
          <div className="form-signin">
            <input type="text" placeholder="Email của bạn" />
            <button className="btn-signin-home">Đăng ký</button>
          </div>
        </div>
        <div className="container">
          <div className="footer-header-page">
            <div className="footer-icon-page ">
              <div className="img-footer-nav">
                <a href="">
                  <img src={logoHome} alt="" />
                </a>
              </div>
              <div className="des-footer">
                <p>
                  Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng
                  tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store
                  nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của
                  Apple cho người dùng Việt Nam.
                </p>
              </div>
              <div className="icon-social">
                <div className="img-social">
                  <a href="">
                    <img src={face} alt="" />
                  </a>
                </div>
                <div className="img-social">
                  <a href="">
                    <img src={youtube} alt="" />
                  </a>
                </div>
                <div className="img-social">
                  <a href="">
                    <img src={zalo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-info-page">
              <div className="information-footer">
                <strong>Thông tin</strong>
              </div>
              <ul className="item-info-page">
                <li className="item-child-footer">
                  <a href="">Tin Tức</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Giới thiệu </a>
                </li>
                <li className="item-child-footer">
                  <a href="">Check IMEI</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Phương thức thanh toán</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Thuê điểm bán lẻ</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Bảo hành và sửa chữa</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Tuyển dụng</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Đánh giá chất lượng, khiếu nại</a>
                </li>
              </ul>
            </div>
            <div className="footer-info-page">
              <div className="information-footer">
                <strong>Chính sách</strong>
              </div>
              <ul className="item-info-page">
                <li className="item-child-footer">
                  <a href="">Thu cũ đổi mới</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Giao hàng </a>
                </li>
                <li className="item-child-footer">
                  <a href="">Giao hàng (ZaloPay)</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Huỷ giao dịch </a>
                </li>
                <li className="item-child-footer">
                  <a href="">Đổi trả</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Bảo hành</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Dịch vụ</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Giải quyết khiếu nại</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Bảo mật thông tin</a>
                </li>
              </ul>
            </div>
            <div className="footer-info-page">
              <div className="information-footer">
                <strong>Địa chỉ & Liên hệ</strong>
              </div>
              <ul className="item-info-page">
                <li className="item-child-footer">
                  <a href="">Tài khoản của tôi</a>
                </li>
                <li className="item-child-footer">
                  <a href="">Đơn đặt hàng </a>
                </li>
                <li className="item-child-footer">
                  <a href="">Hệ thống cửa hàng</a>
                </li>
                <li className="item-child-footer not-border">
                  <a href="">Tìm Store trên Google Map </a>
                </li>
                <li className="item-child-footer not-border">
                  <a href="">
                    Mua hàng: <span>1900.6626 </span>
                  </a>
                </li>
                <li className="item-child-footer not-border address">
                  <a href="">Nhánh 1: khu vực Hà Nội và các tỉnh phía bắc </a>
                </li>
                <li className="item-child-footer not-border address">
                  <a href="">
                    Nhánh 2: khu vực Hồ Chí Minh và các tỉnh phía nam
                  </a>
                </li>
                <li className="item-child-footer not-border">
                  <a href="">
                    Doanh nghiệp: <span>0822.688.668 </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-body-page">
            <div className="footer-lower">
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
              & ĐT TP. Hà Nội cấp ngày 08/06/2016.
              <br />
              Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố
              Hà Nội, Việt Nam
              <br />
              Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
            </div>
            <div className="img-footer-lower">
              <a href="">
                <img src={bocongthuong} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;

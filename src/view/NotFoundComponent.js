import "./scss/NotFoundComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Link } from "react-router-dom";
import notFound from "../assets/img/404NotFound.jpg";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
const NotFoundComponent = () => {
  return (
    <>
      <NavComponent />
      <div className="container container-not-found">
        <div className="body-not-found">
          <img src={notFound} alt="" />
        </div>
        <Link className="title-not-found" to="/">
          Back to home
        </Link>
      </div>
      <FooterComponent />
    </>
  );
};
export default NotFoundComponent;

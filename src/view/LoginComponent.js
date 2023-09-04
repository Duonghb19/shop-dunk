import FooterComponent from "./FooterComponent";
import NavComponent from "./NavComponent";
import "./scss/LoginComponent.scss";
import "./scss/reset.scss";
import "./scss/responsive.scss";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import login from "../assets/img/VNU_M492_08 1.jpeg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
const LoginComponent = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <NavComponent />
      <div className="container login-home">
        <div className="body-login">
          <Breadcrumb
            className="Breadcrumb"
            items={[
              {
                href: "./",
                title: <HomeOutlined />,
              },
              {
                href: "/dang-nhap",
                title: (
                  <>
                    <span>Đăng nhập</span>
                  </>
                ),
              },
            ]}
          />
        </div>

        <div className="login">
          <div className="img-login">
            <img src={login} alt="" />
          </div>
          <div className="form-input-login">
            <h1>Đăng nhập</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Đăng nhập
                </Button>
                Or <a href="./dang-ki">Tạo tài khoản ngay!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default LoginComponent;

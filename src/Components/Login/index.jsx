import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();

  const keyDetect = (e) => {
    if (loading) return;
    if (e.key === "Enter" || e.key === 13 || e.type === "click")
      return onAuth();
  };
  const onAuth = () => {
    const { phoneNumber, password } = {
      password: passwordRef.current.input.value,
      phoneNumber: phoneRef.current.input.value,
    };
    if (!password || !phoneNumber)
      return notification.error({ message: "Please fill all fields" });
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: "POST",
      data: {
        phoneNumber: `+998${phoneNumber}`,
        password,
      },
    })
      .then(({ data }) => {
        setLoading(false);
        const { token, user } = data.data;
        localStorage.setItem("token", token);
        notification.success({ message: "Succesfully signed in" });
      })
      .catch(({ response }) => {
        setLoading(false);
        if (response.status === 409)
          notification.error({
            message: "User not found",
            description: "Phone number or password incorrect",
          });
      });
  };
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title> Yana bir bor salom</Wrapper.Title>
        <Wrapper.Description>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </Wrapper.Description>
        <Wrapper.Input
          addonBefore={"+998"}
          bordered={false}
          placeholder={"Tel Raqam"}
          ref={phoneRef}
        />
        <Wrapper.InputPassword
          placeholder={"Password"}
          ref={passwordRef}
          onKeyDown={keyDetect}
        />
        <Wrapper.Button onClick={keyDetect}>
          {loading ? <LoadingOutlined /> : "Login"}{" "}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;

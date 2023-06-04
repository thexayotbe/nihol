import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import useNotificationAPI from "../Generic/NotificationAPI";
import useAxios from "../../hooks/useAxios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const notifier = useNotificationAPI();
  const axios = useAxios();
  const signIn = useSignIn();
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();
  const keyDetect = (e) => {
    if (loading) return; // stop
    if (e.key === "Enter" || e.type === "click") return onAuth();
  };
  const onAuth = () => {
    const password = passwordRef.current.input.value;
    const phoneNumber = `+998${phoneRef.current.input.value}`;

    if (!password || !phoneNumber) return notifier("empty");
    setLoading(true);

    axios({
      url: `/user/sign-in`,
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
    })
      .then(
        ({
          data: {
            data: { token, user },
          },
        }) => {
          setLoading(false);
          localStorage.setItem("token", token);
          signIn({
            token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: user,
          });
          navigate("/");
        }
      )
      .catch(({ response: { status } }) => {
        notifier(status);
        setLoading(false);
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

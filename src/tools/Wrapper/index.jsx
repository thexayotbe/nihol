import { ConfigProvider } from "antd";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux";
import ru_RU from "antd/locale/ru_RU";
import { AuthProvider } from "react-auth-kit";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider
          authType="cookie"
          authName="_auth"
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}>
          <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Wrapper;

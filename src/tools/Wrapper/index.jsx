import { ConfigProvider } from "antd";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux";
import ru_RU from "antd/locale/ru_RU";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Wrapper;

import React from "react";
import { DropDownItem, DropDownLabel } from "../styles";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
export const useDropDownApi = () => {
  return {
    navbarDropDownItems: ({ settingClickHandler, localeClickHandler }) => {
      return [
        {
          label: (
            <DropDownItem onClick={settingClickHandler}>
              <SettingOutlined />
              <DropDownLabel>Setting</DropDownLabel>
            </DropDownItem>
          ),
          key: "0",
        },
        {
          label: (
            <DropDownItem onClick={localeClickHandler}>
              <TranslationOutlined />
              <DropDownLabel>Change language</DropDownLabel>
            </DropDownItem>
          ),
          key: "1",
        },

        {
          label: (
            <DropDownItem danger={true}>
              <LogoutOutlined />
              <DropDownLabel>Log out</DropDownLabel>
            </DropDownItem>
          ),
          key: "3",
        },
      ];
    },
  };
};

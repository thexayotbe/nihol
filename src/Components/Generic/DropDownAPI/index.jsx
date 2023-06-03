import React from "react";
import { DropDownItem, DropDownLabel } from "../styles";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
export const useDropDownApi = () => {
  return {
    navbarDropDownItems: [
      {
        label: (
          <DropDownItem>
            <SettingOutlined />
            <DropDownLabel>Setting</DropDownLabel>
          </DropDownItem>
        ),
        key: "0",
      },
      {
        label: (
          <DropDownItem>
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
    ],
  };
};

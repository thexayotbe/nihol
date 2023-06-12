import { Avatar } from "antd";
import React from "react";

const useLocalingAPI = () => {
  return {
    localingOptions: () => {
      return [
        {
          label: (
            <div
              style={{
                padding: 4,
              }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" />
              <div>English</div>
            </div>
          ),
          value: "en",
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png">
                K
              </Avatar>
              <div>Russian</div>
            </div>
          ),
          value: "ru",
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
              <div>O`zbek (kiril)</div>
            </div>
          ),
          value: "uzKiril",
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
              <div>O`zbek (Lotin)</div>
            </div>
          ),
          value: "uzLotin",
        },
      ];
    },
  };
};

export default useLocalingAPI;

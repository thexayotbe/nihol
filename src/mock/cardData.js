import half from "../assets/images/half.png";
import clock from "../assets/images/clock.png";
import users from "../assets/images/users.png";
import building from "../assets/images/building.png";
import ordinary from "../assets/images/ordinary.png";
import luxury from "../assets/images/luxury.png";
import cottage from "../assets/images/cottage.png";
import buildingFlat from "../assets/images/buildingFlat.png";

export const homeCardData = [
  {
    id: 0,
    title: "home_all_users",
    path: "/all-users",
    icon: users,
  },
  {
    id: 1,
    title: "home_half_time",
    path: "/middle-users",
    icon: half,
  },

  {
    id: 2,
    title: "home_half_time",
    path: "/end-users",
    icon: clock,
  },
  {
    id: 3,
    title: "home_place",
    path: "/building-control",
    icon: building,
  },
];

export const emptyPlacesCardData = [
  {
    id: 0,
    title: "ordinary_rooms",
    path: "/ordinary-rooms",
    icon: ordinary,
  },
  {
    id: 1,
    title: "luxury_rooms",
    path: "/luxury-rooms",
    icon: luxury,
  },

  {
    id: 2,
    title: "cottages",
    path: "/cottages",
    icon: cottage,
  },
];

export const ordinaryRoomsCardData = [
  {
    id: 0,
    title: "2",
    path: "/2",
    icon: buildingFlat,
  },
  {
    id: 1,
    title: "4",
    path: "/4",
    icon: buildingFlat,
  },

  {
    id: 2,
    title: "6",
    path: "/6",
    icon: buildingFlat,
  },
];

export const luxuryRoomsCardData = [
  {
    id: 0,
    title: "3",
    path: "/3",
    icon: buildingFlat,
  },
  {
    id: 1,
    title: "5",
    path: "/5",
    icon: buildingFlat,
  },
];

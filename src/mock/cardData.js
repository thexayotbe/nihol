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
    title: "Ordinary Rooms",
    path: "/ordinary-rooms",
    icon: ordinary,
  },
  {
    id: 1,
    title: "Luxury Rooms",
    path: "/luxury-rooms",
    icon: luxury,
  },

  {
    id: 2,
    title: "Cottages",
    path: "/cottages",
    icon: cottage,
  },
];

export const ordinaryRoomsCardData = [
  {
    id: 0,
    title: "2 Building",
    path: "/2",
    icon: buildingFlat,
  },
  {
    id: 1,
    title: "4 Building",
    path: "/4",
    icon: buildingFlat,
  },

  {
    id: 2,
    title: "6 Building",
    path: "/6",
    icon: buildingFlat,
  },
];

export const luxuryRoomsCardData = [
  {
    id: 0,
    title: "3 Building",
    path: "/3",
    icon: buildingFlat,
  },
  {
    id: 1,
    title: "5 Building",
    path: "/5",
    icon: buildingFlat,
  },
];

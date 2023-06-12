import half from "../assets/images/half.png";
import clock from "../assets/images/clock.png";
import users from "../assets/images/users.png";
import building from "../assets/images/building.png";
export const homeCardData = [
  {
    id: 0,
    title: "All users",
    path: "/all-users",
    icon: users,
  },
  {
    id: 1,
    title: "Half time",
    path: "/middle-users",
    icon: half,
  },

  {
    id: 2,
    title: "Time up",
    path: "/end-users",
    icon: clock,
  },
  {
    id: 3,
    title: "Empty places",
    path: "/building-control",
    icon: building,
  },
];

export const emptyPlacesCardData = [
  {
    id: 0,
    title: "Ordinary Rooms",
    path: "/ordinary-rooms",
  },
  {
    id: 1,
    title: "Luxury Rooms",
    path: "/luxury-rooms",
  },

  {
    id: 2,
    title: "Cottages",
    path: "/cottages",
  },
];

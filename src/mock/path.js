import AllUsers from "../Components/AllUsers";
import Cottages from "../Components/BuildingTypes/Cottages";
import LuxuryRooms from "../Components/BuildingTypes/LuxuryRooms";
import OrdinaryRooms from "../Components/BuildingTypes/OrdinaryRooms";
import EmptyPlaces from "../Components/EmptyPlaces";
import HalfTime from "../Components/HalfTime";
import Home from "../Components/Home";
import Report from "../Components/Report";
import TimeUp from "../Components/TimeUp";

export const paths = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/all-users",
    element: <AllUsers />,
  },
  {
    id: 3,
    path: "/middle-users",
    element: <HalfTime />,
  },
  {
    id: 4,
    path: "/end-users",
    element: <TimeUp />,
  },
  {
    id: 5,
    path: "/building-control",
    element: <EmptyPlaces />,
    hasChild: true,
    children: [
      { id: "4-1", path: "ordinary-rooms", element: <OrdinaryRooms /> },
      { id: "4-2", path: "luxury-rooms", element: <LuxuryRooms /> },
      { id: "4-3", path: "cottages", element: <Cottages /> },
    ],
  },
  {
    id: 6,
    path: "/report",
    element: <Report />,
  },
];

import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import { RequireAuth } from "react-auth-kit";
const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import {
  Home,
  History,
  Library,
  Like,
  Subscription,
  Trending,
  Videos,
  WatchLater,
  Notfound,
} from "./pages/index.js";

import "./App.css";
import MainLayout from "./Mainlayout/index.jsx";
import MainSide from "./components/MainSide.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<MainSide />} path="/" />
          <Route element={<History />} path="/history" />
          <Route element={<Library />} path="/library" />
          <Route element={<Like />} path="/like" />
          <Route element={<Subscription />} path="/sub" />
          <Route element={<Trending />} path="/trending" />
          <Route element={<Videos />} path="/yourvid" />
          <Route element={<WatchLater />} path="/watchlater" />
        </Route>
        <Route element={<Notfound />} path="*" />
      </Routes>
    </>
  );
}

export default App;

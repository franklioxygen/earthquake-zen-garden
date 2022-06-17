import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/Home";
import Layout from "./src/Layout";
import Profile from "./src/Profile";
import Detail from "./src/Detail";
import Data from "./src/data.json";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout profile={Data.profile} />}>
            <Route index element={<Home records={Data.data.features} />}/>
            <Route path="profile" element={<Profile profile={Data.profile} />} />
            <Route path="detail/:id" element={<Detail records={Data.data.features} />} />
            {/* <Route path="detail?id=:id" element={<Detail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);



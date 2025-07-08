
import UncontrolledExample from './header';
import ProductComponent from './pro_detail';
import DummyJsonComponent from './product';
import Movies from './one';
import './Movies.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datewalakam from './date_time';
import Color from './events';
import Addhook from "./book_hook";
import FacebookPost from './fb_post'
import EmployeeSalary from './inputs'
import Login from './form'
import Counter from './effects_pro';
import React, { createContext, useState } from 'react';

import ChildB from './ChildB';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
// import AppNavbar from './navbar';  // moved to Layout
import MovieList from './props';
import Moviedetail from './props_detail'; // ✅ Correct
 // ✅ Correct


export const MyContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const cardData = [
    {
      img: "https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
      title: "Kabir Singh",
      detail: "Kabir Singh Full Movie | Shahid Kapoor | Kiara Advani | Nikita Dutta | Teena Singh | Review & Facts",
      link: "https://www.youtube.com/watch?v=RiANSSgCuJk"
    },
    // ... other cards
  ];

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      <div className="dark-theme">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/fb_post" element={<FacebookPost />} />
            <Route path="/one" element={<Movies />} />
            <Route path="/product" element={<DummyJsonComponent />} />
            <Route path="/ChildB" element={<ChildB />} />
            <Route path="/book_hook" element={<Addhook />} />
            <Route path="/date_time" element={<Datewalakam />} />
            <Route path="/effects_pro" element={<Counter />} />
            <Route path="/events" element={<Color />} />
            <Route path="/header" element={<UncontrolledExample />} />
            <Route path="/inputs" element={<EmployeeSalary />} />
            <Route path="/pro_detail" element={<ProductComponent />} />
            <Route path="/props" element={<MovieList />} />
            <Route path="/props_detail/:id" element={<Moviedetail />} />
          </Route>
        </Routes>

        {/* Hero Section */}
        {/* <div className="hero-section">
          <Datewalakam />
          <div className="hero-overlay">
            <h1>Red Brothers</h1>
            <p>Action | Crime | Thriller</p>
          </div>
        </div> */}

        {/* Movie Cards */}
        {/* {cardData.map((card, index) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
    <MovieCard
      img={card.img}
      title={card.title}
      detail={card.detail}
      link={card.link}
    />
  </div>
))} */}


 
      </div>
    </MyContext.Provider>
  );
}

export default App;

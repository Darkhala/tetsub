// MyFavorite.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RectanglesComponent from './components/RectanglesComponent';
import Favorites from './components/Favorites';

function MyFavorites() {
  return (
    <MainLayout>
      <Header />
      <RectanglesComponent />
      <Routes>
        <Route path="/" element={<Favorites />} />
        <Route path="/new" element={<Favorites />} />
      </Routes>
      <Favorites />
      <Favorites />
      <Favorites />
      <Favorites />
    </MainLayout>
  );
}

// MainLayout component to wrap the common layout elements
const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default MyFavorites;

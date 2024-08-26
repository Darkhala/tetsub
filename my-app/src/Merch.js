// Merch.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MerchLinks from './components/MerchLinks';
import MerchPics from './components/MerchPics';

function Merch() {
  return (
    <MainLayout>
      <Header />
      <MerchLinks />
      <Routes>
        <Route path="/" element={<MerchPics />} />
        <Route path="/new" element={<MerchPics />} />
      </Routes>
      <MerchPics />
      <MerchPics />
      <MerchPics />
    </MainLayout>
  );
}

// MainLayout component to wrap the common layout elements
const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default Merch;

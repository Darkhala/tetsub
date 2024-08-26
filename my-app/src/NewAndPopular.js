// NewAndPopular.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RectanglesComponent from './components/RectanglesComponent';
import Popular from './components/Popular';
import New from './components/New';

function NewAndPopular() {
  return (
    <MainLayout>
      <Header />
      <RectanglesComponent />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <New />
    </MainLayout>
  );
}

// MainLayout component to wrap the common layout elements
const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default NewAndPopular;

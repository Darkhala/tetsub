// ExploreAll.js
import { useParams } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RectanglesComponent from './components/RectanglesComponent';
import VideoEx from './components/videoEx';

function ExploreAll() {
  return (
    <MainLayout>
      <Header />
      <RectanglesComponent />
      <Routes>
        <Route path="/" element={<VideoEx />} />
        <Route path="/new" element={<VideoEx />} />
      </Routes>
      <VideoEx />
      <VideoEx />
      <VideoEx />
    </MainLayout>
  );
}

// MainLayout component to wrap the common layout elements
const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};


export default ExploreAll;
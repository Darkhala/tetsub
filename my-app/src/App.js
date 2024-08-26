// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RectanglesComponent from './components/RectanglesComponent';
import TopShow from './components/Topshow';
import TrendingSection from './components/TrendingSection';
import VideoPlayerPage from './components/VideoPlayerPage';
import Footer from './components/Footer';
import './App.css';
import NewAndPopular from './NewAndPopular';
import ExploreAll from './ExploreAll';
import Merch from './Merch';
import MyFavorites from './MyFavorites';
import Login from './Login';
import SignUp from './SignUp';
import DashContent from './components/DashContent';
import DashAnalytics from './components/DashAnalytics';
import Earnings from './components/Earnings';
import DashComments from './components/DashComments';
import Settings1 from './components/settings1';
import SetMonetization from './components/setmonetization';
import SetSecurity from './components/setsecurity';
import SetPrivacy from './components/setprivacy';
import SetNotifications from './components/setnotifications';
import SetDisplay from './components/setdisplay';
import SetResources from './components/setresources';
import ContentDashboard from './ContentDashboard';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Header />
                <RectanglesComponent />
                <TopShow />
                <TrendingSection />
                <DashContent />
                <DashAnalytics />
                <Earnings />
                <DashComments />
                <Settings1 />
                <SetMonetization />
                <SetSecurity />
                <SetPrivacy />
                <SetNotifications />
                <SetDisplay />
                <SetResources />
                <UserProfile />
              </MainLayout>
            }
          />
          <Route path="/new-and-popular" element={<NewAndPopular />} /> 
          <Route path="/myfavorites" element={<MyFavorites/>}/>
          <Route path="/Merch" element={<Merch />} /> 
          <Route path="/explore_all" element={<ExploreAll />} />
          <Route path="/video/:id" element={<VideoPlayerPageWithLayout />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/ConteDashboard" element={<ContentDashboard />} /> 
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

// MainLayout component to wrap the common layout elements
const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

// VideoPlayerPageWithLayout component to render VideoPlayerPage with the common layout
const VideoPlayerPageWithLayout = () => {
  // Assuming you have the necessary logic for VideoPlayerPageWithLayout
  return (
    <MainLayout>
      <VideoPlayerPage />
    </MainLayout>
  );
};

export default App;


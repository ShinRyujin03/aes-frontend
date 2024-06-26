import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EssayScoring from "./components/EssayScoring/EssayScoring";
import Home from "./components/Home/Home";
import SamplePage from "./components/Sample/SamplePage";
import NotFound404ErrorPage from "./components/404Page/404Page";
import ButtonToTop from "./components/ButtonToTop";
import LatestTopicPage from "./components/LatestTopic/LatestTopicPage";
import BandPage from "./components/Sample/BandPage";
import DetailPage from "./components/DetailPage/DetailPage";
import Header from "./components/Elements/Header";
import Footer from "./components/Elements/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        {/* <Header/> */}
        {/* Uncomment the following line if you need the Google sign-in prompt */}
        {/* <div id="google-signin-prompt" className="google-signin-prompt" /> */}
        <Routes>
          <Route path="/check-essay" element={<EssayScoring />} />
          <Route path="/" element={<Home />} />
          <Route path="/ielts-writing-samples" element={<SamplePage />} />
          <Route path="/latest-topic" element={<LatestTopicPage />} />
          <Route path="/band/:bandId/:pageNumber" element={<BandPage />} />
          <Route path="/text/:idSlug" element={<DetailPage />} />

          {/* Uncomment the following line if you have a NotFound404ErrorPage component */}
          <Route path="*" element={<NotFound404ErrorPage />} />
        </Routes>
        <ButtonToTop />
        <Footer/>
      </Router>
    </>
  );
}

export default App;

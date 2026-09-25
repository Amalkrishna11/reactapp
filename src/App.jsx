import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../ReactRouterDomCpm/About";
import Home from "../ReactRouterDomCpm/Home";

import ClassComp from "./Components/Classcomp";
import FunctionalComp from "./Components/Fuctionalcomp";

import MountCounter from "./Components/Lifecyclemethods/Mounting";
import UnMountCounter from "./Components/Lifecyclemethods/Unmountingcounter";
import UpdatingCounter from "./Components/Lifecyclemethods/Updating";

import LinkComponent from "../ReactRouterDomCpm/LinkComponent";
import Test from "./Components/Test";
import Usenavigate from "../ReactRouterDomCpm/Usenavigate";

import Useparamscomp from "./Useparamscomp";
import NestedRouter from "./NestedRouter";
import Navbar from "./Navbar";

import Showhide from "./Components/Hooks/Usestate/Showhide";
import Inputfield from "./Inputfield";
import Like from "./Like";
import Backgroundcolor from "./Backgroundcolor";
import Parent from "./props/Parent";
import Parentdata from "./props/Propsdrilling";

// import Userdata from "./Userdata";
// import { Userprovider } from "./Usercontex";
import Forms from "./Components/form/Forms";
import Crud from "./Components/form/Crud";

function App() {
  return (
    // <Userprovider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/forms" element={<Forms />} />
          <Route path="/crud" element={<Crud />} />

          <Route path="/back" element={<Backgroundcolor />} />

          <Route path="/like" element={<Like />} />

          {/* <Route path="/provide" element={<Userdata />} /> */}

          <Route path="/props" element={<Parent />} />

          <Route path="/p" element={<Parentdata />} />

          <Route path="/input" element={<Inputfield />} />

          <Route path="/about" element={<About />} />

          <Route path="/link" element={<LinkComponent />} />

          <Route path="/test" element={<Test />} />

          <Route path="/usenavigate" element={<Usenavigate />} />

          <Route
            path="/Useparamscomp/:id"
            element={<Useparamscomp />}
          />

          <Route path="/nested" element={<NestedRouter />}>
            <Route path="home" element={<Home />} />
          </Route>

          <Route path="/nav" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="test" element={<Test />} />
          </Route>

          <Route path="/show" element={<Showhide />} />

        </Routes>
      </BrowserRouter>
    // </Userprovider>
  );
}

export default App;
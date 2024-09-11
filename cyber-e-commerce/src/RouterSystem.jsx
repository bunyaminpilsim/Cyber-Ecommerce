import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'
import Page5 from './components/page5/Page5'
import Page6 from './components/page6/Page6'
import ShoppingCard from './components/shoppingCardPage/ShoppingCardPage'


function RouterSystem(){
    return (
      <>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/productsPage" element={<Page2 />} />
          <Route path="/step1" element={<Page4 />} />
          <Route path="/step2" element={<Page5 />} />
          <Route path="/step3" element={<Page6 />} />
          <Route path="/productDetail" element={<Page3 />} />
          <Route path="/shoppingCart" element={<ShoppingCard />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </>
    );
  };
  
  export default RouterSystem;
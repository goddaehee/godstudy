import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import styles from "./App.module.css";
import Wrapper from './Wrapper';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

const App = () => {
	return (
		<div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;

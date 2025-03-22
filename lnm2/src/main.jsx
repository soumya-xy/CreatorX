import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Creators from './components/Creators.jsx';
import Pricing from './components/Pricing.jsx';
import Hero from './components/Hero.jsx';
import FeaturedCreators from './components/FeaturedCreators.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Benefits from './components/Benefits.jsx';
import ExclusivePerks from './components/ExclusivePerks.jsx';
import FAQs from './components/FAQs.jsx';
import Profile from './components/Profile.jsx';
import Chat from './components/chat.jsx';
import React, { useState } from 'react';
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={
        <>
          <Hero />
          <FeaturedCreators />
          <HowItWorks />
          <Benefits />
          <ExclusivePerks />
          <FAQs />

        </>
      }/>
      
      <Route path="/creators" element={<Creators />}/>

      
      <Route path="/FAQs" element={<FAQs />}/>
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/xero/connect" element={<connectWallet />} />
      <Route path="/Chat" element={<Chat/>}/>
      
       </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

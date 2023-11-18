import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Varieties from '../components/Varieties'
import FeatureFood from '../components/FeatureFood'
import Offers from "../components/Offers"
import Brands from "../components/Brands"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
    <Navbar/>
    <Category/>
    <Varieties/>
    <FeatureFood/>
    <Offers/>
    <Brands/>
    <Footer/>
    </>
  )
}

export default Home
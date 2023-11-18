import React from 'react'
import Navbar from '../components/Navbar'
import Select  from '../components/Select'
import FeatureFood from '../components/FeatureFood'
import Footer from '../components/Footer'
import Pagebtn from '../components/Pagebtn'

function Menu() {
  return (
    <>
    <Navbar/>
    <Select/>
    <FeatureFood/>
    <Pagebtn/>
    <Footer/>
    </>
  )
}

export default Menu
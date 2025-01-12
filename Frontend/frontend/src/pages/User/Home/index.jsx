import React from 'react'
import HeroSection from '../../../components/User/HeroSection'
import UserProducts from '../UserProducts'
import HeroCards from '../../../components/User/HeroCards'

function Home() {
  return (
    <>
      <HeroSection/>
      <br /><br />
      <UserProducts/>
      <br /><br />
      <HeroCards/>
    </>
  )
}

export default Home
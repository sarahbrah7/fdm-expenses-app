import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExpenseMenu from '../components/expense-menu'
import Navbar from '../components/navbar'
import Showcase from '../components/showcase'
import Footer from '../components/footer'


const Home: NextPage = () => {
  return (
   <>
      <Navbar></Navbar>

      <Showcase></Showcase>

      <ExpenseMenu></ExpenseMenu>

      <Footer></Footer>

   </>
  )
}

export default Home;

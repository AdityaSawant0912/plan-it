import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <>

      <Header title="Plan-It" />
      <Nav></Nav>
      <div>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
      </div>
    </>
  )
}

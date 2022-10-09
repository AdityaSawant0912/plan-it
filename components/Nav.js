import Link from "next/link"
import navStyles from '../styles/Nav.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Nav() {
  const { data: session, status, loading } = useSession()
  return (
    <nav className={navStyles.header}>
      <h1 className={navStyles.logo}>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav `}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <>
            <li>
              <Link href='/board/aditya'>
                <a>Dashboard</a>
              </Link>
            </li>

            <li>
              <Link href='/api/auth/signout'>
                <a
                  onClick={e => {
                    e.preventDefault()
                    signOut()
                  }}>
                  Sign Out
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}


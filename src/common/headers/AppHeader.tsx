import Link from 'next/link'
import React from 'react'

const AppHeader: React.FC = () => {
  return (
    <Link href="/">
      <header className="hover:cursor-pointer sticky top-0 w-screen flex items-center text-3xl h-20 border-b p-5 bg-white">
        Regen
      </header>
    </Link>
  )
}

export default AppHeader

import React from 'react'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='z-10 flex flex-col items-stretch max-w-full px-4 md:px-8'>
      {children}
    </main>
  )
}

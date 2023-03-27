import React from 'react'
import Image from 'next/image';
import { NovoI } from '~/assets';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const NovoLogo = () => {
  return (
    <div className="static flex xl:flex-1/4">
    <Link
      href="/"
      aria-label="home page"
      className="m-0 ml-9 inline-block whitespace-nowrap py-[.1925rem] text-xl text-white"
    >
      <Image
        onClick={() => void signIn("google")}
        src={NovoI}
        alt="Join Novo Logo"
      />
    </Link>
  </div>
  )
}

export default NovoLogo;
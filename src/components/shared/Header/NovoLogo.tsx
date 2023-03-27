import React from 'react'
import Image from 'next/image';
import { NovoI } from '~/assets';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const NovoLogo = () => {
  return (
    <div className="md:flex-1/2 md:max-w-1/2 static flex w-full px-4 xl:max-w-1/4 xl:flex-1/4">
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
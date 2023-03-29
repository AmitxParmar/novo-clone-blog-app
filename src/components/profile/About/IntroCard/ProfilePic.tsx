import Image from 'next/image';
import React from 'react'
import { useSession } from 'next-auth/react';
import { defaultImage } from '~/assets';

const ProfilePic = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="sm:md:m-[-80px_0_30px_16px] h-[156px] w-[156px] rounded-[50%] border-4 border-solid border-white flex filter-[drop-shadow(0_2px_8px_rgba(0,0,0,.12))]">
      <Image src={sessionData?.user.image || defaultImage} alt='profilePic' className="bg-[url('https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0')50%_50%/cover_no-repeat_white]" fill />
    </div>
  )
}

export default ProfilePic;
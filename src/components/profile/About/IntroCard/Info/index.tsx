import React from 'react'
import Title from './Title'
type Props = {}

const Info = (props: Props) => {
  return (
    /* TODO: add margin to medium devices if it causes any issues in small screens. */
    <div className='sm:my-0 sm:mx-4 xl:mx-8 flex flex-col break-words'>
      <Title />
    </div>
  )
}

export default Info
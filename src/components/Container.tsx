import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <div className='max-w-[1200px] mx-auto px-5'>
        {children}
    </div>
  )
}

export default Container
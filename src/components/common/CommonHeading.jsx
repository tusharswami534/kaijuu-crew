import React from 'react'

const CommonHeading = ({SectionHeading , SectionWhiteHeading}) => {
  return (
    <div>
        <p className='leading-86 text-[72px] font-godzilla font-normal text-ferrari-red'>{SectionHeading} <span className='text-white leading-86 text-[72px] font-godzilla font-normal'>{SectionWhiteHeading}</span> </p>
    </div>
  )
}

export default CommonHeading

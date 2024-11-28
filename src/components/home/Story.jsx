import React from 'react'
import StoryImage from '../../assets/image/png/story-image.png'
import CommonHeading from '../common/CommonHeading'
import CommonDescription from '../common/CommonDescription'

const Story = () => {
  return (
    <div id='story' className='bg-blue-charcoal py-24 max-xl:py-20 max-lg:py-16 max-md:py-14 max-sm:py-12'>
        <div className='max-w-[1320px] mx-auto max-xl:px-5'>
            <div className='flex flex-wrap'>
                <div className='w-1/2 max-lg:w-full'>
                    <img src={StoryImage} alt="storyImage" />
                </div>
                <div className='w-1/2 max-lg:w-full flex flex-col justify-center '>
                    <div>
                        <CommonHeading SectionHeading="Story"/>
                    </div>
                    <div className='pt-7 max-w-[648px]'>
                        <CommonDescription CommonSectionDescription={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story

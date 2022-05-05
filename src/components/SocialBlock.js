import React,{useRef,useEffect} from 'react'
import SocialLink from './SocialLink'
import gsap from 'gsap'

const SocialBlock = () => {

    const socialRef = useRef()

    useEffect(() => {

        // const socialRefs = [
        //     socialRef1.current,
        //     socialRef2.current,
        //     socialRef3.current,
        //     socialRef4.current,
        // ]

      gsap.fromTo(socialRef.current, {
          right:"-100px",
      },{
          right:"10px"
      })
    },[])
    


  return (
    <div className='social-block' ref={socialRef} >
        <SocialLink src='/images/Facebook_Box_Hollow_R.png' url='https://www.facebook.com/pravin.kumar25M/'  />
        <SocialLink src='/images/Instagram_Box_Hollow_R.png' url='https://www.facebook.com/pravin.kumar25M/' />
        <SocialLink src='/images/Linkedin_Hollow_R.png' url='https://www.facebook.com/pravin.kumar25M/'/>
        <SocialLink src='/images/Snapchat_Box_Hollow_R.png' url='https://www.facebook.com/pravin.kumar25M/'/>
    </div>
  )
}

export default SocialBlock
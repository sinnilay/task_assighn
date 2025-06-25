import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
    <>
        <footer className='relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row justify-between text-white bg-gray-800  py-5 px-20 sm:px=20 items-center gap-2 sm:gap-0'>

            <section className='text-lg font-semibold'>
                || ASSGNMENT COMPLETION FOR GRAPS MAKETING PVT.LTD ||
            </section>
            <section className='flex items-center justify-center gap-5 text-xl font-semibold text-white'>
             <p> -: DEVLOPED BY NILAY SINGH :- </p>
            </section>
             
        </footer>
   </> 
   
)
}

export default Footer;

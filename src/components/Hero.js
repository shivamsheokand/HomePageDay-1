import React from 'react';
import img1 from '../assets/1obj.png';
import img2 from '../assets/2obj.png';
import img3 from '../assets/1.png';
import img4 from '../assets/2.png';
import img5 from '../assets/3.png';
import img6 from '../assets/4.png'
const Hero = () => {
    return (
        <div className='flex items-center justify-between h-screen overflow-hidden'>
            <div className='flex flex-col items-start md:w-[30%] ml-12'>
                <div>
                    <h2 className='text-xl font-bold uppercase'>Spaicel offer</h2>
                </div>
                <div>
                    <h1 className='text-6xl font-bold uppercase'>famly house </h1>
                    <h1 className='text-3xl font-bold uppercase'>for rent</h1>
                </div>
                <div className='m-4 text-sm'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias iure. Nisi tenetur corrupti cupiditate eligendi accusamus, minima velit vel.</p>
                </div>
                <div className='flex gap-2 mt-3'>
                    <div className='flex gap-2'>
                        <img className='h-[60px] w-[40px] resize' src={img2} alt="img2" />
                        <h1 className='text-xl font-bold uppercase'>Lorem Ipsum</h1>
                    </div>
                    <div className='flex gap-2'>
                        <img className='h-[60px] w-[40px] resize' src={img1} alt="img1" />
                        <h1 className='text-xl font-bold uppercase'>Lorem Ipsum</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 ml-10'>
                <div>
                    <img className='h-[110px] w-[180px] resize' src={img3} alt="" />
                </div>
                <div>
                    <img className='h-[110px] w-[180px] resize' src={img4} alt="" />
                </div>
                <div>
                    <img className='h-[110px] w-[180px] resize' src={img5} alt="" />
                </div>
            </div>
            <div className='mr-10'>
                <img className='resize w-[450px] h-[380px]' src={img6} alt="" />
            </div>
        </div>
    );
};

export default Hero;

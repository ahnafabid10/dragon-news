import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 pt-10'>
            <img className='max-w-[330px] ' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;
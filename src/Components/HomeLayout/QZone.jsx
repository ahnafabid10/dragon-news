import React from 'react';
import swimming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <div className="font-bold mb-5">QZone</div>
            <div className="">
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;
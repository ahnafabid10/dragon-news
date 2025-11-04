import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-3'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
            <p className='font-bold mr-5'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-bold mr-5'>Apple revamps App Store on the web with a new native design and improved browsing experience for iPhone, iPad, and Mac users.</p>
            <p className='font-bold mr-5'>Amazon Web Services (AWS) suffers a major outage for the second time this month, disrupting major platforms like Reddit and Slack.</p>
            <p className='font-bold mr-5'>Telecom regulators are working to manage the complex web of AI integration, focusing on ethics, security, and infrastructure challenges.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;
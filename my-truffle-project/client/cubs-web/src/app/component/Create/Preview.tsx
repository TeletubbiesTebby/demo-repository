import React from 'react'
import Image from 'next/image'
import Donate from './Donate'
interface PreviewProps {
    imageUrl: string;
    title: string;
}

const Preview: React.FC<PreviewProps> = ({ imageUrl, title }) => {
    return (
        <div className=" flex flex-col items-center">
            <Image
                src={imageUrl} 
                alt={title} 
                className="" 
                width={300}
                height={200}
            />
            <p className="mb-4 text-[24px] font-semibold">{title}</p>
            <Donate/>
        </div>
    );
};

export default Preview;

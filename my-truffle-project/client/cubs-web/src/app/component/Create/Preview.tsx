import React from 'react';
import Image from 'next/image';
import Donate from './Donate';

interface PreviewProps {
    imageUrl: string;
    title: string;
}

const Preview: React.FC<PreviewProps> = ({
    imageUrl,
    title,
}) => {
    return (
        <div className="flex flex-col items-center">
            <p className='text-[30px] font-semibold pb-2'>Preview</p>
            {imageUrl ?(
                 <Image
                 src={imageUrl}
                 alt={title}
                 width={300}
                 height={200}
             />
            ) : (
                <Image
                src="/Port1.svg"
                alt={title}
                width={300}
                height={200}
            />
            )

            }
            <p className="mb-4 mt-2 text-[24px] font-semibold">{title}</p>
            <Donate />
        </div>
    );
};

export default Preview;

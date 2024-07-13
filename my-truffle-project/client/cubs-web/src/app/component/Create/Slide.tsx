import React from 'react';
import Image from 'next/image';
interface SectionProps {
    onPreviewChange: (imageUrl: string, title: string) => void;
}

const SlideTemplateSection: React.FC<SectionProps> = ({ onPreviewChange }) => {
    const templates = [
        { title: "Slide 1", imageUrl: "/Slide.svg" },
        { title: "Slide 2", imageUrl: "/Slide.svg" },
        { title: "Slide 3", imageUrl: "/Slide.svg" },
       
    ];

    return (
        <main className='grid self-center'>
        <p className='text-[24px] font-bold pb-2'>
            Slide Template
        </p>
        <div className="grid grid-cols-3 gap-4 ">
            {templates.map(template => (
                <div key={template.title} className="  p-2 cursor-pointer flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 font-semibold" onClick={() => onPreviewChange(template.imageUrl, template.title)}>
                    <Image 
                        className=''
                        src={template.imageUrl} 
                        alt={template.title} 
                        width={250} 
                        height={250} />
                    <p>{template.title}</p>
                </div>
            ))}
        </div>
    </main>
    );
};

export default SlideTemplateSection;

import React from 'react';
import Image from 'next/image';
interface SectionProps {
    onPreviewChange: (imageUrl: string, title: string) => void;
}

const PortfolioTemplateSection: React.FC<SectionProps> = ({ onPreviewChange }) => {
    const templates = [
        { title: "little prince 1 ", imageUrl: "/Port1.svg" },
        { title: "little prince 2", imageUrl: "/Port2.svg" },
        { title: "little prince 3", imageUrl: "/Port3.svg" },
        { title: "little prince 4", imageUrl: "/Port4.svg" },
    ];

    return (
        <main className='grid self-center'>
            <p className='text-[24px] font-bold pb-2'>
            Portfolio Template
            </p>
            <div className="grid grid-cols-4 gap-4">
                {templates.map(template => (
                    <div key={template.title} className=" p-2 cursor-pointer flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 font-semibold" onClick={() => onPreviewChange(template.imageUrl, template.title)}>
                        <Image src={template.imageUrl} alt={template.title} width={180} height={150} />
                        <p>{template.title}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default PortfolioTemplateSection;

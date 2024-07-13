import React from 'react';
import Image from 'next/image';  // Using Next.js Image component for optimized image handling

interface SectionProps {
    onPreviewChange: (imageUrl: string, title: string) => void;
}

const CreateSection: React.FC<SectionProps> = ({ onPreviewChange }) => {
    const templates = [
        { title: "Folder", imageUrl: '/Folder.svg' },  // Assuming the public directory structure
        { title: "Diary", imageUrl: '/Diary.png' },
        { title: "File", imageUrl: '/File.png' },
        { title: "Resume", imageUrl: '/Resume.svg' },
    ];

    return (
        <main className='grid self-center'>
            <p className='text-[24px] font-bold pb-2'>
                Create
            </p>
        <div className="grid grid-cols-4 gap-4 self-center">
            {templates.map(template => (
                <div key={template.title} className="border rounded-xl bg-[#EAE6DF] p-4 cursor-pointer flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 font-semibold" onClick={() => onPreviewChange(template.imageUrl, template.title)}>
                    <Image src={template.imageUrl} alt={template.title} width={120} height={100} />
                    <p>{template.title}</p>
                </div>
            ))}
        </div>
        </main>
    );
};

export default CreateSection;

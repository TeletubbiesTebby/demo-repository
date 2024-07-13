
import CreateSection from '../component/Create/Create'
import PortfolioTemplateSection from '../component/Create/Portfolio';
import SlideTemplateSection from '../component/Create/Slide';
import React, { useState } from 'react';
import Preview from '../component/Create/Preview'

const MainLayout: React.FC = () => {
    const [preview, setPreview] = useState({ imageUrl: '', title: '' });

    const handlePreviewChange = (imageUrl: string, title: string) => {
        setPreview({ imageUrl, title });
    };

    return (
        <div className="grid grid-cols-6">
        <div className="col-span-4 grid grid-rows-3 ">
            <CreateSection onPreviewChange={handlePreviewChange} />
            <PortfolioTemplateSection onPreviewChange={handlePreviewChange} />
            <SlideTemplateSection onPreviewChange={handlePreviewChange} />
        </div>
        <div className="col-span-2 grid self-center mr-[5%]">
            <Preview imageUrl={preview.imageUrl} title={preview.title} />
        </div>
    </div>
    
    );
};

export default MainLayout;
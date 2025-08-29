import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './index.css';

type ResumeViewerProps = {
    type: 'resume' | 'coverLetter';
    title: string;
    downloadUrl?: string;
    fileName?: string;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ 
    type, 
    title, 
    downloadUrl, 
    fileName 
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleViewToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="resume-viewer">
            <div className="resume-header">
                <h2 className="resume-title">{title}</h2>
                <div className="resume-actions">
                    <iframe src={downloadUrl} title="Resume" width="100%" height="100%"/>
                </div>
            </div>
        </div>
    );
};

export default ResumeViewer;



import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './index.css';

type ResumeViewerProps = {
    type: 'resume' | 'coverLetter';
    title: string;
    content: string;
    downloadUrl?: string;
    fileName?: string;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ 
    type, 
    title, 
    content, 
    downloadUrl, 
    fileName 
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDownload = () => {
        if (downloadUrl) {
            // Create a temporary link element for download
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName || `${type}-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Fallback: create a text file download
            const blob = new Blob([content], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName || `${type}-${Date.now()}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }
    };

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
            
            {isExpanded && (
                <div className="resume-content">
                    <div className="content-wrapper">
                        <pre className="content-text">{content}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeViewer;



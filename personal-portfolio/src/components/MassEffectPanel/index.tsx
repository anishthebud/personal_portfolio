import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { PortfolioItem, getData } from '../../utils/api';

// Helper function to parse HSL values
const parseHSL = (hslString: string): { h: number, s: number, l: number, a?: number } | null => {
    const match = hslString.match(/hsla?\(([^)]+)\)/);
    if (!match) return null;
    
    const values = match[1].split(',').map(v => v.trim());
    const h = parseFloat(values[0]);
    const s = parseFloat(values[1].replace('%', ''));
    const l = parseFloat(values[2].replace('%', ''));
    const a = values[3] ? parseFloat(values[3]) : 1;
    
    return { h, s, l, a };
};

// Helper function to create HSL string
const createHSL = (h: number, s: number, l: number, a: number = 1): string => {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

// Helper function to lighten HSL color
const lightenHSL = (hslString: string, amount: number): string => {
    const hsl = parseHSL(hslString);
    if (!hsl) return hslString;
    
    const newL = Math.min(100, hsl.l + amount);
    return createHSL(hsl.h, hsl.s, newL, hsl.a || 1);
};

// Helper function to darken HSL color
const darkenHSL = (hslString: string, amount: number): string => {
    const hsl = parseHSL(hslString);
    if (!hsl) return hslString;
    
    const newL = Math.max(0, hsl.l - amount);
    return createHSL(hsl.h, hsl.s, newL, hsl.a || 1);
};

// Helper function to adjust saturation
const adjustSaturation = (hslString: string, amount: number): string => {
    const hsl = parseHSL(hslString);
    if (!hsl) return hslString;
    
    const newS = Math.max(0, Math.min(100, hsl.s + amount));
    return createHSL(hsl.h, newS, hsl.l, hsl.a || 1);
};

// This component needs to have props that determine a series of information
type MassEffectProps = {
    type: string,
    color: string
}

// The type of data that is coming in, the color

const MassEffectPanel: React.FC<MassEffectProps> = ({type, color}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Education');
    const [selectedItem, setProjectItem] = useState<PortfolioItem>();

    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        setLoading(true);
        const response = await getData<PortfolioItem>(type);
        if (response.status === 'SUCCESS' && response.data) {
            setItems(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        // Calculate color variations using HSL
        const hoverColor = darkenHSL(color, 10); // Lighter
        const selectionColor = darkenHSL(color, 30); // Darker
        const textColor = lightenHSL(color, 10); // Slightly lighter for text
        
        // Create more sophisticated variations
        const hoverColorEnhanced = adjustSaturation(hoverColor, 10); // Increase saturation for hover
        const selectionColorEnhanced = adjustSaturation(selectionColor, -20); // Decrease saturation for selection
        
        // Set all color variables
        document.documentElement.style.setProperty('--primary-color', color);
        document.documentElement.style.setProperty('--hover-color', hoverColorEnhanced);
        document.documentElement.style.setProperty('--selection-color', selectionColorEnhanced);
        document.documentElement.style.setProperty('--text-color', textColor);
    }, [color]);

    useEffect(() => {
        fetchItems();
    }, []);

    console.log(items);

    function renderSelectionMenu() {
        if (type === 'experience') {
            const educationItems = items.filter((item) => item.category === 'Education');
            const projectItems = items.filter((item) => item.category === 'Projects');
            if (selectedCategory === 'Education') {
                return (
                    <div className="selectionMenu">
                        {educationItems.map((item, index) => (
                            <div className={`selectionItem ${selectedItem?.name === item.name ? 'selected': ''}`} onClick={() => setProjectItem(item)}>{item.name}</div>
                        ))}
                    </div>
                );
            } else if (selectedCategory === 'Projects') {
                return (
                    <div className="selectionMenu">
                        {projectItems.map((item, index) => (
                            <div className={`selectionItem ${selectedItem?.name === item.name ? 'selected': ''}`} onClick={() => setProjectItem(item)}>{item.name}</div>
                        ))}
                    </div>
                );
            }
        }
    }

    return (
        <div className="outerPanel">
            <div className="left-panel">
                <div className="categoryMenu">
                    <div 
                        id='left-item'
                        className={`categoryItem ${selectedCategory === 'Education' ? 'selected' : ''}`} 
                        onClick={() => setSelectedCategory('Education')}
                    >
                        Education
                    </div>
                    <div 
                        id='right-item'
                        className={`categoryItem ${selectedCategory === 'Projects' ? 'selected' : ''}`} 
                        onClick={() => setSelectedCategory('Projects')}
                    >
                        Projects
                    </div>
                </div>
                {renderSelectionMenu()}
            </div>
            <div className="right-panel">
            <div className="image-container">
                <img src={selectedItem?.image_url || "./personalPortfolioLogo.png"} alt="" />
            </div>
            <div className="text-container">
                <p>
                    {selectedItem?.description}
                </p>
            </div>
        </div>
    </div>
    );
}

export default MassEffectPanel;


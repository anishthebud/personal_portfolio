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
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<PortfolioItem>();

    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        setLoading(true);
        const response = await getData<PortfolioItem>(type.replace(" ", "_").toLowerCase());
        if (response.status === 'SUCCESS' && response.data) {
            setItems(response.data);
            const categorySet = new Set<string>();
            response.data.forEach((item, index) => {
                categorySet.add(item.category);
            });
            setCategories(Array.from(categorySet));
        }
        setLoading(false);
    };

    useEffect(() => {
        // Calculate color variations using HSL
        const hoverColor = darkenHSL(color, 10); // Lighter
        const selectionColor = darkenHSL(color, 20); // Darker
        const textColor = lightenHSL(color, 10); // Slightly lighter for text
        
        // Create more sophisticated variations
        const hoverColorEnhanced = adjustSaturation(hoverColor, 10); // Increase saturation for hover
        const selectionColorEnhanced = adjustSaturation(selectionColor, -20); // Decrease saturation for selection
        
        // Set all color variables
        console.log(color);
        document.documentElement.style.setProperty('--mass-effect-color', color);
        document.documentElement.style.setProperty('--hover-color', hoverColorEnhanced);
        document.documentElement.style.setProperty('--selection-color', selectionColorEnhanced);
        document.documentElement.style.setProperty('--text-color', textColor);
    }, [color]);

    useEffect(() => {
        fetchItems();
    }, []);


    const renderSelectionMenu = (category: string) => {
        return (
            <div className="selectionMenu">
                {items.filter((item) => item.category === category).map((item, index) => (
                    <div className={`selectionItem ${selectedItem?.name === item.name ? 'selected': ''}`} onClick={() => setSelectedItem(item)}>{item.name}</div>
                ))}
            </div>
        )
    }

    const renderCategoryMenu = () => {
        return categories.map((category, catIndex) => (
            <div key={catIndex} className="categoryMenu">
                <div 
                    className={`categoryItem ${selectedCategory === category ? 'selected': ''}`} 
                    onClick={() => {
                        setSelectedCategory(category)
                        setSelectedItem(undefined)
                    }}
                >
                    {category}
                </div>
                {selectedCategory === category ? renderSelectionMenu(category) : null}
            </div>
        ));
    }

    return (
        <div className="outerPanel">
            <div className="left-panel">
                <div className="areaBar">
                    {type}
                </div>
                {renderCategoryMenu()}
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


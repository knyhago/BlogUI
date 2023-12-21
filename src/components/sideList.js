import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sideList.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            
            
        </div>
    );
};

export default Sidebar;

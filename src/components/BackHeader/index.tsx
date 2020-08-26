import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosReturnLeft } from 'react-icons/io';

import './styles.css';

function BackHeader() {
    return(
        <div className="back-header">
            <Link to="/">
                <IoIosReturnLeft size={40} />
            </Link>
        </div>
        
    );
}

export default BackHeader;
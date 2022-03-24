import React from 'react';

import scrollBgImage from '../images/scroll-bg.png';


function ScrollBackground() {
    return (
        <img
            className="scroll-image"
            src={scrollBgImage}
            style={{
                width: '100%',
                height: 'calc(100% + 9rem)',

                position: 'absolute',
                zIndex: 1,
            }}
        />
    )
}

export default ScrollBackground;
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animate/betspaceanimate.json';

const Loading = () => {
    const width = '400px';
    const height = '400px';

    const options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#001D3D',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Lottie options={options} width={width} height={height} />
        </div>
    );
};

export default Loading;

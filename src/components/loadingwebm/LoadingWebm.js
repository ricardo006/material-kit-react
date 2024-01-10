// LoadingWebM.js
import React, { useEffect, useRef } from 'react';

const LoadingWebm = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleCanPlay = () => {
            // Inicia o vídeo automaticamente quando o evento "canplay" ocorre
            if (videoRef.current) {
                videoRef.current.play();
            }

            // Configura um temporizador para pausar o vídeo após 5 segundos
            const timeoutId = setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            }, 10000);

            return () => clearTimeout(timeoutId);
        };

        // Adiciona um ouvinte para o evento "canplay"
        if (videoRef.current) {
            videoRef.current.addEventListener('canplay', handleCanPlay);
        }

        return () => {
            // Remove o ouvinte apenas se o elemento atual existir
            if (videoRef.current) {
                videoRef.current.removeEventListener('canplay', handleCanPlay);
            }
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#263238',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <video ref={videoRef} loop style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <track kind="captions" />
                <source src={src} type="video/webm" />
            </video>
        </div>
    );
};

export default LoadingWebm;

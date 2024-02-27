import React, { useState, useEffect } from "react";

const LoadingImage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const loadingImage = "src/assets/icons/bg-loading.png"; // Ruta local a la imagen de carga
    const loadingImagen = "src/assets/img/bandera-choco-800.jpg"; // Ruta local a la imagen de carga

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover",
            zIndex: 99,
        }}
        >
        {isLoading && (
            <img
            src={loadingImage}
            alt="Cargando..."
            style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                // backgroundImage: `url(${loadingImagen})`,
                objectFit: "cover",
                position: "relative",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                transform: "translate(-50%, -50%)",
                zIndex: 99
            }}
            />
        )}
        </div>
    );
};

export default LoadingImage;
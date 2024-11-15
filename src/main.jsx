import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css';

// Importer AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialisation d' AOS
AOS.init({
    duration: 1000, // Durée de l'animation en millisecondes
    once: true,     // Animation déclenchée une seule fois
    easing: "ease-in-out", // Type de transition
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

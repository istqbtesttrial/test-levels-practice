import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentTest from './components/ComponentTest.jsx';
import IntegrationTest from './components/IntegrationTest.jsx';
import SystemTest from './components/SystemTest.jsx';
import SystemIntegrationTest from './components/SystemIntegrationTest';
import AcceptanceTest from './components/AcceptanceTest';

function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '15px',
            backgroundColor: '#006400',
            color: '#fff',
            marginTop: '20px',
            borderRadius: '5px 5px 0 0',
            fontSize: '1rem'
        }}>
            © Belhaj Ouajdi 2024
        </footer>
    );
}

function App() {
    return (
        <>
            <Router>
                <div style={{
                    backgroundColor: '#f4f5f7',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <header>
                        <h1 style={{
                            textAlign: 'center',
                            color: '#fff',
                            backgroundColor: '#007BFF',
                            padding: '20px',
                            borderRadius: '5px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
                        }}>
                            Bienvenue sur le site de pratique des niveaux de test
                        </h1>
                    </header>
                    <main style={{ flex: '1' }}>
                        <nav style={{
                            margin: '20px 0',
                            textAlign: 'center'
                        }}>
                            <ul style={{
                                display: 'flex',
                                justifyContent: 'center',
                                listStyle: 'none',
                                padding: '0',
                                gap: '20px'
                            }}>
                                <li>
                                    <a href="/component-test" style={{
                                        textDecoration: 'none',
                                        padding: '10px 15px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                       onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                       onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                                    >
                                        Test de Composant
                                    </a>
                                </li>
                                <li>
                                    <a href="/integration-test" style={{
                                        textDecoration: 'none',
                                        padding: '10px 15px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                       onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                       onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                                    >
                                        Test d&#39;Intégration
                                    </a>
                                </li>
                                <li>
                                    <a href="/system-test" style={{
                                        textDecoration: 'none',
                                        padding: '10px 15px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                       onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                       onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                                    >
                                        Test Système
                                    </a>
                                </li>
                                <li>
                                    <a href="/system-integration-test" style={{
                                        textDecoration: 'none',
                                        padding: '10px 15px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                       onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                       onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                                    >
                                        Test d&#39;Intégration Système
                                    </a>
                                </li>
                                <li>
                                    <a href="/acceptance-test" style={{
                                        textDecoration: 'none',
                                        padding: '10px 15px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                       onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                                       onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                                    >
                                        Test d&#39;Acceptation
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/component-test" element={<ComponentTest />} />
                            <Route path="/integration-test" element={<IntegrationTest />} />
                            <Route path="/system-test" element={<SystemTest />} />
                            <Route path="/system-integration-test" element={<SystemIntegrationTest />} />
                            <Route path="/acceptance-test" element={<AcceptanceTest />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;

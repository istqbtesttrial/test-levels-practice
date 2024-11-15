import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function AcceptanceTest() {
    const [code, setCode] = useState(`function validateLogin(username, password) {
  if (username === 'admin' && password === 'password123') {
    return 'Connexion Réussie';
  } else {
    return 'Échec de Connexion';
  }
}`);

    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false); // Pour l'animation du résultat

    const handleRun = () => {
        try {
            const validateLogin = new Function('return ' + code)();
            const testResult = validateLogin('admin', 'password123');
            setResult(`Résultat : ${testResult}`);
        } catch (error) {
            setResult(`Erreur : ${error.message}`);
        }
        setShowResult(true); // Active l'animation du résultat
    };

    return (
        <div>
            <h2>Test d'Acceptation</h2>
            <p>Modifiez et exécutez le code ci-dessous pour tester la validation de connexion utilisateur :</p>
            <div className="editor-container">
                <Editor
                    value={code}
                    onValueChange={(newCode) => setCode(newCode)}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    className="code-editor"
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14
                    }}
                />
            </div>
            <button onClick={handleRun}>Exécuter le Code</button>
            <div className={`result ${showResult ? 'show' : ''}`}>{result}</div>
            <h3>Instructions :</h3>
            <p>
                Essayez de modifier les valeurs de l'identifiant ou du mot de passe pour provoquer un échec de connexion.
                Par exemple, remplacez <code>password123</code> par <code>wrongpassword</code>.
            </p>
        </div>
    );
}

export default AcceptanceTest;

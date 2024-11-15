import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function ComponentTest() {
    const [code, setCode] = useState(`function addNumbers(a, b) {
  return a + b;
}`);

    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false); // Animation pour le résultat

    const handleRun = () => {
        try {
            const addNumbers = new Function('return ' + code)();
            if (typeof addNumbers !== 'function') {
                throw new Error('Veuillez fournir une fonction valide.');
            }
            const testResult = addNumbers(2, 3);
            setResult(`Résultat : ${testResult}`);
        } catch (error) {
            setResult(`Erreur : ${error.message}`);
        }
        setShowResult(true); // Afficher le résultat avec animation
    };

    return (
        <div>
            <h2>Test de Composant</h2>
            <p>Modifiez et exécutez le code ci-dessous :</p>
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
                Essayez de modifier la fonction <code>addNumbers</code> pour soustraire au lieu d'additionner.
                Remplacez <code>a + b</code> par <code>a - b</code> et observez le changement dans le résultat.
            </p>
        </div>
    );
}

export default ComponentTest;

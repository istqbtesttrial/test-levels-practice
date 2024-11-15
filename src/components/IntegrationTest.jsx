import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function IntegrationTest() {
    const [code, setCode] = useState(`function multiplyAndDivide(a, b, c) {
  const product = a * b;
  return product / c;
}`);

    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false); // Pour l'animation du résultat

    const handleRun = () => {
        try {
            const multiplyAndDivide = new Function('return ' + code)();
            const testResult = multiplyAndDivide(4, 5, 2);
            setResult(`Résultat : ${testResult}`);
        } catch (error) {
            setResult(`Erreur : ${error.message}`);
        }
        setShowResult(true); // Active l'animation du résultat
    };

    return (
        <div>
            <h2>Test d'Intégration</h2>
            <p>Modifiez et exécutez le code ci-dessous pour tester l'intégration de deux fonctions :</p>
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
                Essayez de modifier la division finale pour retourner le reste (modulo).
                Remplacez <code>product / c</code> par <code>product % c</code> et observez comment cela affecte le résultat.
            </p>
        </div>
    );
}

export default IntegrationTest;

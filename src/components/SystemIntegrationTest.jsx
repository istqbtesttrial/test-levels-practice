import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function SystemIntegrationTest() {
    const [code, setCode] = useState(`async function simulateApi(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (amount > 0) resolve('Paiement Réussi');
      else resolve('Paiement Échoué');
    }, 1000);
  });
}`);

    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false); // Pour l'animation du résultat

    const handleRun = async () => {
        try {
            const simulateApi = new Function('return ' + code)();
            const testResult = await simulateApi(100);
            setResult(`Résultat : ${testResult}`);
        } catch (error) {
            setResult(`Erreur : ${error.message}`);
        }
        setShowResult(true); // Active l'animation du résultat
    };

    return (
        <div>
            <h2>Test d'Intégration Système</h2>
            <p>Modifiez et exécutez le code ci-dessous pour tester l'intégration avec une API :</p>
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
                Essayez de simuler un échec de paiement en modifiant le montant passé à la fonction <code>simulateApi</code>.
                Par exemple, essayez avec un montant de <code>-10</code> pour voir le résultat.
            </p>
        </div>
    );
}

export default SystemIntegrationTest;

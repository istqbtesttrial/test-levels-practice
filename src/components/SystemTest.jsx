import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function SystemTest() {
    const [code, setCode] = useState(`function processTransaction(balance, amount, type) {
  if (type === 'deposit') {
    return balance + amount;
  } else if (type === 'withdrawal' && balance >= amount) {
    return balance - amount;
  } else {
    return 'Erreur : Fonds insuffisants';
  }
}`);

    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false); // Pour l'animation du résultat

    const handleRun = () => {
        try {
            const processTransaction = new Function('return ' + code)();
            const testResult = processTransaction(100, 50, 'withdrawal');
            setResult(`Résultat : ${testResult}`);
        } catch (error) {
            setResult(`Erreur : ${error.message}`);
        }
        setShowResult(true); // Active l'animation du résultat
    };

    return (
        <div>
            <h2>Test Système</h2>
            <p>Modifiez et exécutez le code ci-dessous pour tester une transaction système :</p>
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
                Essayez de simuler une erreur de retrait en changeant le type de transaction de
                <code>'withdrawal'</code> à <code>'deposit'</code> ou en modifiant le montant pour qu'il dépasse le solde.
            </p>
        </div>
    );
}

export default SystemTest;

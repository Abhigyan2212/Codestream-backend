import React, { useState, useEffect } from 'react';
import './style.css';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const iframe = document.getElementById('output');
      const document = iframe.contentDocument || iframe.contentWindow.document;
      document.open();
      document.write(
        htmlCode + `<style>${cssCode}</style>` + `<script>${jsCode}</script>`
      );
      document.close();
    }, 300);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="container">
      <div className="left">
        <label><i className="fa-brands fa-html5"></i> HTML</label>
        <textarea
          id="html-code"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          placeholder="Type HTML here..."
        ></textarea>

        <label><i className="fa-brands fa-css3-alt"></i> CSS</label>
        <textarea
          id="css-code"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          placeholder="Type CSS here..."
        ></textarea>

        <label><i className="fa-brands fa-js"></i> JavaScript</label>
        <textarea
          id="js-code"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          placeholder="Type JavaScript here..."
        ></textarea>
      </div>
      <div className="right">
        <label><i className="fa-solid fa-play"></i> Output</label>
        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default CodeEditor;

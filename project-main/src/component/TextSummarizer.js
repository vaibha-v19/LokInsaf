import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ArticleSummarizer = () => {
  const [apiKey, setApiKey] = useState(
    'b19773562amshf24d02fc6afafc0p11cbf8jsn7d6f24acc2f4'
  );
  const [articleUrl, setArticleUrl] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    // Make a request to the API here using Axios
    axios({
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url:  articleUrl,
        length: '3',
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
      },
      data: {
        url: articleUrl,
      },
    })
      .then((response) => {
        console.log('hi');
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="article-summarizer-container">
        <h2>Article Summarizer</h2>
        <input
          type="text"
          className="article-url-input"
          placeholder="Enter Article URL"
          value={articleUrl}
          onChange={(e) => setArticleUrl(e.target.value)}
        />
        <button
          onClick={handleSummarize}
          className="summarize-button"
        >
          Summarize
        </button>
        <div>
          <h3 className="summary-heading">Summary</h3>
          <p className="summary-text">{summary}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleSummarizer;

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../Ai/foodai.css";
import ai from "../../assets/ai.png";

const AiwithText = () => {
  // Initialize Google Generative AI with API key
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDYGUJiLDqBHO2gzgJZo6-oJL__fYExc_Y"
  );

  // State variables for input, AI response, and loading state
  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to call Generative AI and fetch recipe suggestions
  async function aiRun() {
    setLoading(true); // Set loading state
    setResponse(""); // Clear previous response

    // Get the Generative AI model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Define the prompt for AI generation
    const prompt = `Provide a detailed recipe for a healthy version of ${search}. Include a list of ingredients needed, step-by-step instructions for preparation, and the calorie count per serving. Ensure that the recipe is designed to be nutritious, using wholesome and minimally processed ingredients.`;

    // Generate content using the AI model
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Set AI response and turn off loading state
    setResponse(text);
    setLoading(false);
  }

  // Handler for input change
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handler for button click to trigger AI search
  const handleClick = () => {
    aiRun();
  };

  // Function to format the AI response for display
  const formatResponse = (response) => {
    // Remove ** from the response text
    const cleanResponse = response.replace(/\**\*/g, "");
    const lines = cleanResponse
      .split("\n")
      .filter((line) => line.trim() !== "");
    return lines.map((line, index) => {
      if (index === 0) {
        return (
          <h2 key={index} className="main-title">
            {line}
          </h2>
        );
      } else if (line.endsWith(":")) {
        return <h3 key={index}>{line}</h3>;
      } else if (line.startsWith("-")) {
        return <li key={index}>{line.substring(1).trim()}</li>;
      } else if (line.match(/^\d+\./)) {
        return <li key={index}>{line}</li>;
      } else {
        return <li key={index}>{line}</li>;
      }
    });
  };

  // Ensure scrolling to the top on component mount
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container">
      {/* AI title and description */}
      <div className="ai_title">
        <div className="ai_title_div">
          <h1>
            <span>AI</span> -Powered Healthy Recipe Generator
          </h1>{" "}
          <img src={ai} alt="" />
        </div>
        <p>Enter a recipe name to generate a healthy version of it.</p>
        <p>
          Experience personalized recipe suggestions tailored to your
          preferences with our AI-powered recipe generator. Simply input a food
          category or dish, and receive detailed, healthy recipe ideas complete
          with ingredients, step-by-step instructions, and calorie counts per
          serving. Explore nutritious meal options effortlessly!
        </p>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search Food with Category using Generative AI"
          onChange={handleChangeSearch}
        />
        <button className="search-button" onClick={handleClick}>
          Search
        </button>
      </div>

      {/* Loading indicator and AI response display */}
      {loading && !aiResponse ? (
        <p className="loading-text">Loading ...</p>
      ) : (
        <div className="response-container">
          <div className="response-text">{formatResponse(aiResponse)}</div>
        </div>
      )}
    </div>
  );
};

export default AiwithText;

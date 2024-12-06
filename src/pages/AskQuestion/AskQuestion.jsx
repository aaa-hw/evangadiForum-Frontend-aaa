import React, { useState, useEffect, useContext } from "react";
import axios from "../../Api/axios";
import styles from "./AskQuestion.module.css";
import { AppState } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

function AskQuestion() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user } = useContext(AppState);
  const [title, setTitle] = useState("");
  const [description, setQuestion] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("/api/questions");
  //       // Handle fetched data if necessary
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!description.trim() || !title.trim() /* || !user */) {
      setError("Please fill in all fields and ensure you are logged in.");
      return;
    } else {
      setError("");
    }

    try {
      await axios.post(
        "/questions/askquestion",
        {
          title: title,
          description: description,
          userid: user?.userid,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setTitle("");
      setQuestion("");
      // alert("Question submitted successfully!");
      toast("Question submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error submitting question:", err);
      toast("Failed to submit question. Please try again.");
      setError("Failed to submit question. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {/* Steps Section */}
      <div className={styles.steps}>
        <h2>Steps to Write a Good Question</h2>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>

      {/* Ask Public Question Section */}
      <div className={styles.askPublicQuestion}>
        <h2>Ask a Public Question</h2>
        <Link to="/">Go to Question Page</Link>
      </div>

      {/* Question Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.titleBar}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter your question title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className={styles.questionDescription}>
          <label htmlFor="question">Question Description</label>
          <textarea
            id="question"
            placeholder="Provide a detailed description of your question"
            value={description}
            onChange={(event) => setQuestion(event.target.value)}
            rows="10"
            required
          ></textarea>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitButton}>
          Post Your Question
        </button>
      </form>
    </div>
  );
}

export default AskQuestion;

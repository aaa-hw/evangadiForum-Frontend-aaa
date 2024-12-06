/* eslint-disable react/prop-types */
import React from "react";
import classes from "./HomePage.module.css";
// import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function QuestionsInfo({ username, title, questionid }) {
  const path = `/QuestionDetail/${questionid}`;
  // console.log(path)
  return (
    <>
      <div className={classes.questions_container}>
        <hr />
        <div className={classes.ask_question}>
          <div className={classes.ask_user_info}>
            <div className={classes.ask_user}>
              <Link to={path}>
                <FaUserCircle
                  className={classes.icon}
                  // style={{ color: "gray" }}
                  size={65}
                />
              </Link>
              <span>{username}</span>
            </div>
            <div className={classes.ask_question_text}>
              {/* <input type="text" placeholder="Ask Question" /> */}
              <p>{title}</p>
            </div>
          </div>
          {}

          <div className={classes.ask_arrow}>
            <Link to={path}>
              <FaAngleRight size={25} className={classes.icon} />
            </Link>
          </div>
        </div>

        {/* <hr /> */}
      </div>
    </>
  );
}

export default QuestionsInfo;

"use client"
import React from 'react';
import styled from 'styled-components';
import MyNotes from "@/public/img/MyNotes.png";

const LandScreenCard = () => {
  return (
    <StyledWrapper>
      <div className="brutalist-card">
        <div className="brutalist-card__header">
          <div className="brutalist-card__icon">
            {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg> */}
            <img src={MyNotes.src} alt="My Notes" height={60} width={60}/>
          </div>
          <div className="brutalist-card__alert">My Notes</div>
        </div>
        <div className="brutalist-card__message">
        Capture your ideas, jot down notes, and stay organized with a clean, distraction-free online notepad designed for simplicity and speed.
        </div>
        <div className="brutalist-card__actions">
          <a className="brutalist-card__button brutalist-card__button--mark" href="/signin">Sign In</a>
          <a className="brutalist-card__button brutalist-card__button--read" href="/signup">Sign Up</a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .brutalist-card {
    width: 320px;
    border: 4px solid #000;
    background-color: #fff;
    padding: 1.5rem;
    box-shadow: 10px 10px 0 #000;
    font-family: "Arial", sans-serif;
    margin: 0 auto;
  }

  .brutalist-card__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #000;
    padding-bottom: 1rem;
  }

  .brutalist-card__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding: 0.5rem;
  }

  .brutalist-card__icon svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: #fff;
  }

  .brutalist-card__alert {
    font-weight: 900;
    color: #000;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .brutalist-card__message {
    margin-top: 1rem;
    color: #000;
    font-size: 0.9rem;
    line-height: 1.4;
    border-bottom: 2px solid #000;
    padding-bottom: 1rem;
    font-weight: 600;
  }

  .brutalist-card__actions {
    margin-top: 1rem;
  }

  .brutalist-card__button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 3px solid #000;
    background-color: #fff;
    color: #000;
    position: relative;
    transition: all 0.2s ease;
    box-shadow: 5px 5px 0 #000;
    overflow: hidden;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .brutalist-card__button--read {
    background-color: #000;
    color: #fff;
  }

  .brutalist-card__button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.6s;
  }

  .brutalist-card__button:hover::before {
    left: 100%;
  }

  .brutalist-card__button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  .brutalist-card__button--mark:hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
    box-shadow: 7px 7px 0 #333;
  }

  .brutalist-card__button--read:hover {
    background-color: #fff;
    border-color: #000;
    color: #000;
    box-shadow: 7px 7px 0 #333;
  }

  .brutalist-card__button:active {
    transform: translate(5px, 5px);
    box-shadow: none;
  }`;

export default LandScreenCard;

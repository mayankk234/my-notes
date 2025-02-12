"use client";
import { useState } from "react";
import styled from "styled-components";

export default function StartPage() {
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
    }
  };

  return (
    <StyledContainer>
      <div className="content-wrapper">
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-block">
              {note}
            </div>
          ))}
        </div>

        <div className="input-section">
          <textarea
            className="note-input"
            placeholder="Write your note here..."
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
          />
          <div className="floating-square" onClick={handleAddNote}>
            <span>+</span>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .notes-list {
    display: flex;
    flex-wrap: wrap; /* Mantiene todo en una fila mientras haya espacio */
    gap: 20px;
    width: 100%;
    justify-content: center; /* Centra las notas */
  }

  .note-block {
    flex: 1 1 auto; /* Permite que las notas se ajusten automáticamente */
    max-width: 700px; /* Tamaño máximo de cada nota */
    min-width: 200px; /* Tamaño mínimo para evitar notas demasiado pequeñas */
    padding: 15px;
    border: 2px solid currentColor;
    background: transparent;
    box-shadow: 4px 4px currentColor;
    min-height: 100px;
    word-wrap: break-word;
    font-size: 16px;
    text-align: center;
  }

  .input-section {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .note-input {
    width: 300px;
    height: 100px;
    padding: 15px;
    border: 2px solid currentColor;
    border-radius: 5px;
    background: transparent;
    box-shadow: 4px 4px currentColor;
    font-size: 16px;
    resize: none;
    outline: none;
  }

  .floating-square {
    width: 60px;
    height: 60px;
    background: currentColor -webkit-focus-ring-color;
    border: 2px solid currentColor;
    box-shadow: 4px 4px currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    span {
      font-size: 32px;
      color: currentColor;
    }
  }

  .floating-square:active {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px currentColor;
  }

  @media (max-width: 768px) {
    .notes-list {
      justify-content: center;
    }

    .content-wrapper {
      align-items: center;
    }

    .input-section {
      flex-direction: column;
    }
  }
`;

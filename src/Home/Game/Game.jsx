import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./game.css";

const Game = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    console.log(
      "%c👩‍💻 Welcome to the ACM-W Tech Hunt!",
      "color:#ff66b3;font-size:16px;font-weight:bold;"
    );
    console.log(
      "%cHint → Something on this page hides more than it shows 👀",
      "color:#00ccff;"
    );
    console.log(
      "%cPro tip: Sometimes attributes are more talkative than text.",
      "color:#999;"
    );
  }, []);

  const checkAnswer = () => {
    const ans = input.trim().toLowerCase();
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    // Detect Base64 directly
    if (ans === "sw5ub3zhdglvbg==" || ans === "SW5ub3ZhdGlvbg==") {
      setMessage("🧠 Nice try, but I need the *decoded* Base64 version! (Hint: Decode SW5ub3ZhdGlvbg==)");
      return;
    }

    if (ans === "innovation") {
      setShowConfetti(true);
      setMessage(
        <>
          <div className="celebration">
            🎉 <strong>Correct!</strong> You cracked the Tech Hunt Quest! 🚀
          </div>
          <p className="next-clue">
            🧭 <strong>Next Locations:</strong> <br />
            ➤ MH 12 NN 5007 <br />
            ➤ MH 31 FD 9249 <br />
            ➤ MH 12 QQ 5830 <br />
            <br />₹
            🎁 Go to <strong>any one</strong> of these locations and find the toy!
          </p>
        </>
      );

      // Stop confetti after a few seconds
      setTimeout(() => setShowConfetti(false), 6000);
    } else {
      setMessage("❌ Try again, techie! Find the hiddenGem!");
    }
  };

  return (
    <div className="game-container">
      {showConfetti && <Confetti />}
      <h2 className="title">ACM-W Tech Hunt 🔍</h2>
      <p className="clue">
        “I drive discovery, yet I’m unseen.<br />
        Peek inside the code to find me 👀”
      </p>

      <input
        className="answer-input"
        placeholder="Enter the hidden answer from hiddenGem"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submit-btn" onClick={checkAnswer}>
        Submit
      </button>

      <div className="result">{message}</div>

      {/* Decoy text */}
      <div className="decoy">
        <p>Sometimes, not everything visible is important... peek carefully!</p>
      </div>

      {/* 🔒 Hidden secret */}
      <div
        id="answer in this line"
        hiddenGem="SW5ub3ZhdGlvbg=="
        style={{ display: "none" }}
      >
        Hidden core
      </div>
    </div>
  );
};

export default Game;
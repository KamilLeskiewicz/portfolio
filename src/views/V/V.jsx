import { useState } from "react";
import confetti from "canvas-confetti";
import "./V.css";

const imagePaths = [
  "/image1.gif",
  "/image2.gif",
  "/image3.gif",
  "/image4.gif",
  "/image5.gif",
  "/image6.gif",
  "/image7.gif",
];

const Valentine = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(imagePaths[0]);
  const [question, setQuestion] = useState("Czy zostaniesz moją walentynką?");
  const [showButtons, setShowButtons] = useState(true);
  const [yesButtonSize, setYesButtonSize] = useState({
    height: 48,
    width: 80,
    fontSize: 20,
  });

  const noButtonTexts = [
    "Nie",
    "Jesteś pewna?",
    "Kochanie no proszę",
    "Nie rób mi tego",
    "Nawet nie próbuj tego kliknąć",
    "wjebałaś się, teraz zostaniesz moją walentynką",
  ];

  const handleNoClick = () => {
    if (noClickCount < 5) {
      const newCount = noClickCount + 1;
      setNoClickCount(newCount);
      setImageSrc(imagePaths[newCount]);
      setYesButtonSize((prev) => ({
        height: prev.height + 35,
        width: prev.width + 35,
        fontSize: prev.fontSize + 25,
      }));
    }
  };

  const handleYesClick = () => {
    setImageSrc("/image7.gif");
    setQuestion("Yayyy!!");
    setShowButtons(false);
    confetti();
  };

  return (
    <div className="valentine-container">
      <div className="valentine-content">
        <img
          src={imageSrc}
          alt="Cute kitten with flowers"
          className="valentine-image"
        />
        <h2 className="valentine-question">{question}</h2>
        {showButtons && (
          <div className="button-container">
            <button
              onClick={handleYesClick}
              className="yes-button"
              style={{
                minHeight: yesButtonSize.height,
                minWidth: yesButtonSize.width,
                fontSize: yesButtonSize.fontSize,
              }}
            >
              Tak
            </button>
            <button onClick={handleNoClick} className="no-button">
              {noButtonTexts[noClickCount] || noButtonTexts[5]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valentine;

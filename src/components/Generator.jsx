import React, { useState } from "react";

const Generator = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  function generateLottoNumbers() {
    const ln = [];
    for (let i = 0; i < 5; i++) {
      ln.push(getRandomNumber(1, 70));
    }
    ln.push(getRandomNumber(1, 27));
    setLottoNumbers(ln);
  }
  console.log(lottoNumbers);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {lottoNumbers.length === 0 ? (
        <span className="text-2xl font-bold">
          00:00:00:00:00 <span className="text-red-500">00</span>
        </span>
      ) : (
        <span className="text-2xl font-bold">
          {`${lottoNumbers[0]} : ${lottoNumbers[1]} : ${lottoNumbers[2]} : ${lottoNumbers[3]} : ${lottoNumbers[4]}`} : <span className="text-red-500 underline">{lottoNumbers[5]}</span>
        </span>
      )}
      <button
        onClick={() => generateLottoNumbers()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max"
      >
        Generate: Power Ball
      </button>
    </div>
  );
};

export default Generator;

import React, { useState, useEffect, FC } from 'react';
import baseBackground from '../img/pop.png';
import background from '../img/window.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // axiosをインポート

export const GamePage: FC = () => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<any>(null); // クイズデータを格納するための状態

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' && countdown === null) {
        // カウントダウンを開始
        setCountdown(5);
      }
    };

    // イベントリスナーを追加
    window.addEventListener('keydown', handleKeyDown);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      // 1秒ごとにカウントダウン
      const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (countdown === 0) {
      // カウントダウンが0になったらクイズを取得
      console.log(`${process.env.REACT_APP_API_BASE_URL}`);
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/web_quizzes`)
        .then((response) => {
          setQuiz(response.data[0]); // 1問目のクイズをセット
          setCountdown(null); // カウントダウンをリセット
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [countdown]);

  return (
    <>
      <div
        className="h-full"
        style={{ backgroundImage: `url(${baseBackground})`, height: '1080px' }}
      >
        <div className="flex p-16 ml-32 mt-54">
          <div
            className="h-full"
            style={{
              backgroundImage: `url(${background})`,
              width: '1187px',
              height: '788px',
            }}
          >
            <div className="py-24 px-16">
              <p className="text text-sky-400 text-3xl fond-bold text-center mb-8">
                TypingGame
              </p>
              {countdown !== null ? (
                <p className="text text-red-500 text-5xl font-bold text-center">
                  {countdown}
                </p>
              ) : (
                <p className="text text-black text-xl font-medium my-4 text-center whitespace-pre-wrap">
                  Press Space to start the countdown.
                </p>
              )}
              {quiz && (
                <div>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.description_ja}</p>
                  <p>{quiz.typing_content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

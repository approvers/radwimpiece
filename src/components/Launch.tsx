import { useState } from "react";

const Launch = () => {
  const [name, setName] = useState<string>("");

  const handleStart = (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ
    if (name) {
      onStart(name);
    } else {
      alert('名前を入力してください');
    }
  };

  return(
    <>
      <h2>Sort Quiz</h2>
      <form onSubmit={handleStart}>  {/* formタグを追加 */}
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="button-style"
        />
        <button type="submit" className="button-style">開始</button> {/* type="submit"を追加 */}
      </form>
      <div className="quote-container" style={{ width: '50%', height: '50%' }}>
        <p className="quote-content">wwww<br />.then().then().then().then()</p>
        <p className="quote-author">- かわえおじさん(35)</p>
      </div>
      <p className="quote-alt">"リポジトリ｢RADWIMPS｣の始まり"</p>

      <h2>RADWIMPS</h2>
      <span>現代のプログラミング言語は並行計算の概念を取り入れているものがほとんどであり, 直列実行にこだわってバグを作り込むくらいであれば並行計算の技術スタックを利用したほうが<strong>確実かつ簡潔である</strong>.</span>
      <br />
      <span>RADWIMPS はそのような<u>並行/並列計算に対する関心の向上と記述例を挙げ, 並行性を怖がらずに接すること</u>を目的としたサンドボックスである.</span>

    </>
  )
}

export default Launch;

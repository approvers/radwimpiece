# Architecture

## 状態遷移

```
|launch| --> |ingame| --> |result|

|result| --> |launch|
|result| --> |ingame|
```

### launch (起動画面)

タイトル画面. ゲームに関わる情報を入力したり, 閲覧することが出来る.
設定や遊び方の説明, ゲームのコンセプトなど.

### ingame (ゲーム中)

ゲーム画面. ゲームシステムに基づいてゲームを進行する.

### result (結果画面)

リザルト画面. ゲームの結果を表示する.
またリーダーボードや結果の記録などについて取り扱う.

## 内部状態

```
global { settings: dyn Settings, leaderboard: dyn LeaderBoard }

|launch| { params: unknown } -{ ... }-> |ingame|

|ingame| { pieces: Piece[], answer: *Piece[] } -{ ... }-> |result|

|result| { score: number, username: string }
```

### `global.settings`

設定を保持する. KV store のイメージ.

### `global.leaderboard`

リーダーボードを保持する. 大体はスコアの配列みたいな感じ.

### `launch.params`

ゲームシステムに影響を与えるパラメータ群. 俗に難易度設定などとも言う.
`global.settings` と比較するとこれは遊び心地やプラットフォーム毎の調整なのに対し, これはゲームのシステム或いは核心に対する調整であることが違う.

### `ingame.pieces`

出題された問題, 或いは取得された piece の集まり. それ以上の意味を持たない.

### `ingame.answer`

ユーザの回答, プレイ結果. 入力に対して頻繁な更新がなされると予想される.

### `result.score`

プレイ結果について数値的表現で表現したもの.

### `result.username`

リーダーボードや画面に表示格納される, ユーザを識別するための文字列.

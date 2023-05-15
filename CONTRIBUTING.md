# contributing guide

## commenting

- 日本語か英語の何れかを使う
  - PR のタイトルや会話文には日本語を推奨
  - コメントや commit message には英語を推奨
- "数日後の自分" が見て理解できる内容まで書く
- 冗長過ぎる表現は避け, 比較的コンパクトな表現を用いる
- Git の commit message は [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に従う

## development flow

branch は以下の構成になっている:

- `main`: リリース, デプロイ (保護あり)
- `dev`: 開発用 (保護あり)
- `patch/*`: 開発用 (保護なし)

また, 加えて以下の branch を含む:

- `pieces`: データセット保存用

```
main     +--------------+--------------------------+-----...
          \            /                          /
dev        +------+-------------+------------+-----------...
            \    /   \         /      \     /
patch/*      +--#     +-------#   +-#  +---#  +-----#
                                 /   \       /       \
pieces   +----------------------------+---------------+--...
```

上の図のようなフローで行う.

- `dev` - `patch/*` 間

  - `dev` から `patch/<feature description>` を生やす
  - `patch/<feature description>` 上で開発を行う
  - `patch/<feature description>` → `dev` へ PR を生やす
  - PR で review を受け, CI を通す
  - 条件を満たしたら, PR の作成者が merge する

- `main` - `dev` 間

  - `dev` から `main` へ PR を生やす
  - review と CI でチェックし, CD も確認を行う
  - 条件を満たしたら, PR の作成者が merge する

- `pieces` - `patch/*` 間

  - `pieces` から `patch/<description>` を生やす
  - `patch/<feature description>` 上で差分を生やす
  - `patch/<feature description>` → `pieces` へ PR を生やす
  - PR で review を受け, CI を通す
  - 条件を満たしたら, PR の作成者が merge する

- `main` - `pieces` 間
  - `pieces` が更新されると `main` へ Bot から PR が立つ
  - 任意のタイミングで review し, CI を通す
  - 条件を満たしたら Bot が merge する

また, 以上のフローを担保するために以下の策が取られる:

- Rules にて branch の保護と制約付け
- GitHub Actions で PR の検査 (may)

PR を生やす際には以下に従う:

- title は Conventional Commits の書式に従い, 内容は日本語で簡潔に記す
- テンプレートに従い, 必要な情報を記す

Issue, Discussions を生やす際には以下に従う:

- title は日本語で簡潔に記す
- テンプレートは設けないが, 必要な情報を記す

## environment

- POSIX 準拠のシステムを推奨するが, この限りではない
- システム, 開発環境固有のファイルは基本的に管理しない

## other

- 基本的に Discussions に会話ログを残し, オープン且つ情報を集約するよう務める
  - 或いは Discord の該当プロジェクトチャンネルにて会話する

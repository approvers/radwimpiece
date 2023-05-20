// @ts-ignore: temporally unavailable
import { z } from "zod";

// radwimpiece, radwimps / piece なので言語ごとの断片情報は "piece" である
export type Piece = z.TypeOf<typeof Piece>;
export const Piece = z.object({
  // 言語名
  name: z.string().nonempty(),

  // ソースファイルの拡張子
  // 概ね有名か, 最も使われている順とする
  exts: z.string().nonempty().array(),

  // 言語についての簡単な概要
  about: z.string().nonempty(),

  // リリース日？
  // 確認可能な最大の精度とする (つまり不定, 取り扱い注意)
  born: z.date(),

  // `approvers/RADWIMPS` にあるソースコード
  radwimps: z.string().nonempty(),

  // 情報源へのリンク
  sources: z.string().url().array(),
});

// 設定を保持するオブジェクト
export type Settings = {
  /* not defined */
};

// リーダーボードを保持するオブジェクト
export type Leaderboard = {
  current: LbEntry[];

  push: (e: LbEntry) => void;
};

type LbEntry = {
  /* not defined */
};

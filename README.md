# Together Dance

<img width="810" alt="スクリーンショット 2021-09-30 17 11 12" src="https://user-images.githubusercontent.com/66157921/135413698-f557cf69-ec74-42da-9505-7a93f5ce1f98.png">


# サービス概要
Together Danceはいつでもどこでも誰とでもをコンセプトにしたダンス用マッチングサービスです。

## URL
[`App`](https://www.togedan.jp/)

## 簡易システム構成図

![サーバ概要図](https://user-images.githubusercontent.com/66157921/135754214-172720da-de36-4e3b-819b-16fe28d468fd.png)




## 使用技術
- フロントエンド
  - React
  - Next.js
  - Tailwind CSS

- バックエンド
  - Ruby
  - Ruby on Rails

- DB
  - PostgreSQL

- インフラ
  - AWS(EC2,VPC,RDS,Route53)
  - Nginx

-　開発環境
  -　Vscode
  -　ESLint/Prettier

- その他ライブラリ
  - react-hook-form(フォームバリデーション)
  - react-hot-toast(トースト表示)
  - react-datepicker(日時フォーム)
  - react-responsive(レスポンシブ対応)
  - react-burger-menu(ハンバーガーメニュー)
  - react-accessible-accordion(アコーディオンメニュー)


## 機能一覧
- ユーザー周り
  - 新規登録、ログイン、ログアウト、ユーザー情報更新、退会
  - プロフィール画像登録
  - 画像プレビュー

- イベント情報
  - イベント新規登録、イベント情報更新、イベント削除
  - イベント検索機能
  - ページネーション機能

- 予約情報
  - 予約情報登録、予約情報更新、予約情報削除



## 工夫した点、悩んだ点、こだわった点
- 各テーブルにステータス項目を持たせて有効性の判別ができるように設計
- タイムアウト処理の実装
- 予約申込やキャンセル時は確認用ポップアップモーダルを表示するように実装
- レスポンシブデザイン
- ハンバーガーメニュー、アコーディオンメニューの実装
- テキストボックスのスクロール表示
- ページネーション実装
- 入力チェックの徹底


## 課題
- フロントエンド課題
  - TypeScriptの導入
  - Jestの導入


- フロント、バック共通
  - 機能追加
    - メッセージ機能
    - お気に入り機能





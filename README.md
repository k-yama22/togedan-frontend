# Together Dance

<img width="720" alt="スクリーンショット 2021-11-08 17 28 57" src="https://user-images.githubusercontent.com/66157921/140708683-f7869361-8f84-4670-b8a2-77592fda9b3f.png">


# サービス概要
Together Danceはいつでもどこでも誰とでもをコンセプトにしたダンス用マッチングサービスです。

## URL
[`App`](https://www.togedan.jp/)

[`バックエンド側リポジトリ(Rails API)`](https://github.com/k-yama22/togedan-backend)

## 簡易システム構成図

![サーバ概要図](https://user-images.githubusercontent.com/66157921/135754214-172720da-de36-4e3b-819b-16fe28d468fd.png)


## インフラ構成図

![AWS構成図](https://user-images.githubusercontent.com/66157921/136402269-560c80ae-2587-4d7d-af14-8ef47601c2de.png)




## 使用技術
- フロントエンド
  - React 17.0.2
  - Next.js 11.1.2
  - Tailwind CSS 2.2.0

- バックエンド
  - Ruby 2.7.1
  - Ruby on Rails 6.1.3 
  - Puma

- DB
  - PostgreSQL

- インフラ
  - AWS(EC2,VPC,RDS,Route53)
  - Nginx

- 開発環境
  - Vscode
  - ESLint/Prettier

- その他ライブラリ
  - react-hook-form(フォームバリデーション)
  - react-hot-toast(トースト表示)
  - react-datepicker(日時フォーム)
  - react-responsive(レスポンシブ対応)
  - react-burger-menu(ハンバーガーメニュー)
  - react-accessible-accordion(アコーディオンメニュー)
  - react-paginate(ページネーション)


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
- SSRの導入
- URLやステータスなど、変更が起こる可能性がある箇所を定数化してハードコーディングを回避
- 画像アップロードとプレビュー表示
- Datepickerを導入し各ブラウザ、OSで共通の使用感を提供するようにした


## 課題
- フロントエンド課題
  - TypeScriptの導入
  - Jestの導入
  - SWRの導入
  - コンポーネントの分割
  - ディレクトリ構成の見直し
  - レンダリング制御の最適化
  - ~~テストログイン機能を追加する~~ 対応済


- バックエンド課題
  - 定数化や共通化処理などのリファクタリング
  - インフラ周りの強化
    - Webサーバーの冗長化、ELBの導入
    - DBサーバーの冗長化
    - Cloudwatchの導入とログ設定
    - S3の導入
  - 会員登録、ログイン処理のパフォーマンス改善

- フロント、バック共通
  - 機能追加
    - メッセージ機能
    - お気に入り機能
    - ソート機能を実装する
  - 都道府県やジャンル等のテーブルを用意しセレクトボックス表示にする
  





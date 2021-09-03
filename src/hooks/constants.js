// API用URL
// 本番環境URL
export const PRODUCTION_URL = "http://togedan.com/";
// ローカル環境URL
export const LOCAL_URL = "http://localhost:3001/";

// ベースURL(切替)
export const BASE_URL = PRODUCTION_URL;

// 認証情報URL
// 認証
export const AUTH_URL = `${BASE_URL}auth`;
// ログイン
export const LOGIN_URL = `${BASE_URL}auth/sign_in`;
// ログアウト
export const LOGOUT_URL = `${BASE_URL}auth/sign_out`;
// パスワード
export const PASSWORD_URL = `${BASE_URL}auth/password`;

// ユーザ情報URL
export const USERS_URL = `${BASE_URL}api/v1/users`;

// イベント情報URL
export const EVENTS_URL = `${BASE_URL}api/v1/events`;
// イベント検索
export const EVENTS_SEARCH_URL = `${BASE_URL}api/v1/events/search`;

// 予約情報情報URL
export const RESERVES_URL = `${BASE_URL}api/v1/reserves`;

// ステータス
// 成功
export const SUCCESS_STATUS = "success";

// エラー
export const ERROR_STATUS = "error";

// 共通メッセージ
// エラーメッセージ
export const COMMON_CREATE_ERROR = "登録できませんでした";
export const COMMON_SELECT_ERROR = "取得できませんでした";
export const COMMON_DELETE_ERROR = "削除できませんでした";
export const COMMON_UPDATE_ERROR = "更新できませんでした";

// 認証機能メッセージ
export const LOGIN_SUCCESS = "ログインしました";
export const LOGIN_ERROR = "ログインできません";
export const NO_USER_ERROR = "ユーザが存在しません";

// 退会機能メッセージ
export const DELETE_ACCOUNT_SUCCESS = "退会しました";
export const DELETE_ACCOUNT_ERROR = "退会できませんでした";
export const DELETE_ACCOUNT_FAILED = "退会に失敗しました";

// 登録機能メッセージ
export const CREATE_FAILED = "登録に失敗しました";

// 取得機能メッセージ
export const SELECT_SUCCESS = "取得に成功しました";
export const SELECT_FAILED = "取得に失敗しました";

// 更新機能メッセージ
export const UPDATE_SUCCESS = "変更が完了しました";
export const UPDATE_FAILED = "登録に失敗しました";

// パスワードリセットメッセージ
export const PASSWORD_RESET_SUCCESS =
  "パスワードリセット用のメール送信しました";
export const PASSWORD_RESET_ERROR = "パスワードリセットできません";
export const PASSWORD_RESET_FAILED = "パスワードリセットに失敗しました";

// ログアウトメッセージ
export const SIGN_OUT_SUCCESS = "ログアウトしました";
export const SIGN_OUT_ERROR = "ログアウトできません";
export const SIGN_OUT_FAILED = "ログアウトに失敗しました";

// 仮登録メッセージ
export const SIGN_UP_SUCCESS = "仮登録が完了しました";
export const SIGN_UP_ERROR = "仮登録できません";
export const SIGN_UP_FAILED = "仮登録に失敗しました";

// イベントステータス
export const EVENT_STATUS_VALID = "1";
export const EVENT_STATUS_INVALID = "2";

// 予約情報ステータス
export const RESERVE_STATUS_VALID = "1";
export const RESERVE_STATUS_INVALID = "2";

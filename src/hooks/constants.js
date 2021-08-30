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

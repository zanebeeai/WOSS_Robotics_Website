export type CodeErrors =
  | "conflict"
  | "bad_request"
  | "unauthorized"
  | "not_found"
  | "internal_server_error"
  | "rate_limit_exceeded"
  | "forbidden";

export type APIError = {
  code: CodeErrors;
  message: string;
};

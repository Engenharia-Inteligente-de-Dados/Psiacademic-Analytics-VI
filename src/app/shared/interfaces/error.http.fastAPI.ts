export interface ErrorHttpFastAPI {
  detail: ErrorHttpFastAPIDetail[];
}

export interface ErrorHttpFastAPIDetail {
  loc: string[];
  msg: string;
  type: string;
  ctx: any;
}

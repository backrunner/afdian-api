export interface AfdianRequestParams {
  page?: number;
}

export interface AfdianRequest {
  user_id: string;
  params?: string;
  ts: number;
}

export interface AfdianSignedRequest {
  user_id: string;
  params?: string;
  ts: number;
  sign: string;
}

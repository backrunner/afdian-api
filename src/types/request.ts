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

export interface AfdianPlanInfo {
  plan_id: string;
  rank: number;
  user_id: string;
  status: number;
  name: string;
  pic: string;
  desc: string;
  price: string;
  update_time: number;
  pay_month: number;
  show_price: string;
  independent: number;
  permanent: number;
  can_buy_hide: number;
  need_address: number;
  product_type: number;
  sale_limit_count: number;
  need_invite_code: boolean;
  expire_time: number;
  sku_processed: unknown[];
  rankType: number;
}

export interface AfdianSponsorInfo {
  sponsor_plans: AfdianPlanInfo[];
  current_plan: AfdianPlanInfo;
  all_sum_amount: string;
  create_time: number;
  first_pay_time: number;
  last_pay_time: number;
  user: {
    user_id: string;
    name: string;
    avatar: string;
  };
}

export interface AfdianSponsorResponse {
  ec: number;
  em: string;
  data: {
    total_count: number;
    total_page: number;
    list: AfdianSponsorInfo[];
  };
}

export interface AfdianOrderInfo {
  out_trade_no: string;
  user_id: string;
  plan_id: string;
  month: number;
  total_amount: string;
  show_amount: string;
  status: number;
  remark: string;
  redeem_id: string;
  product_type: number;
  discount: string;
  sku_detail: unknown[];
  address_person: string;
  address_phone: string;
  addres_address: string;
}

export interface AfdianOrderResponse {
  ec: number;
  em: string;
  data: {
    list: AfdianOrderInfo[];
    total_count: number;
    total_page: number;
  };
}

// Поля, используемые приложением. В исходном Etsy JSON встречаются null.
export interface ListingItem {
  listing_id: number;
  url?: string | null;
  MainImage?: { url_570xN?: string | null } | null;
  title?: string | null;
  currency_code?: string | null;
  price?: string | null;
  quantity?: number | null;
  is_digital?: boolean | null;
}

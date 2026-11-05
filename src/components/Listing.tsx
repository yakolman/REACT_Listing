import type { ListingItem } from '../types';

interface ListingProps {
  items?: ListingItem[];
}

function formatTitle(title: string): string {
  return title.length > 50 ? `${title.slice(0, 50)}…` : title;
}

function formatPrice(price: string, currencyCode: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return symbols[currencyCode]
    ? `${symbols[currencyCode]}${price}`
    : `${currencyCode} ${price}`;
}

function stockClass(quantity: number): string {
  if (quantity <= 10) return 'stock-low';
  if (quantity <= 20) return 'stock-medium';
  return 'stock-high';
}

export default function Listing({ items = [] }: ListingProps) {
  return (
    <div className="product-grid">
      {items.map((item) => {
        // В исходном JSON есть неполная запись без цены, картинки и названия.
        if (
          !item.title ||
          !item.price ||
          !item.currency_code ||
          !item.MainImage?.url_570xN ||
          typeof item.quantity !== 'number'
        ) {
          return null;
        }

        return (
          <div className="product-card" key={item.listing_id}>
            {item.is_digital && <span className="digital-badge">Digital</span>}
            <a
              className="product-link"
              href={item.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="product-image"
                src={item.MainImage.url_570xN}
                alt={item.title}
              />
              <div className="product-info">
                <h3 className="product-title">{formatTitle(item.title)}</h3>
                <div className="price-container">
                  <div className="product-price">
                    {formatPrice(item.price, item.currency_code)}
                  </div>
                  <span className={`stock-badge ${stockClass(item.quantity)}`}>
                    {item.quantity} left
                  </span>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

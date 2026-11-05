import Listing from './components/Listing';
import items from './data/etsy.json';
import type { ListingItem } from './types';

const listings: ListingItem[] = items;

export default function App() {
  return (
    <main className="container">
      <Listing items={listings} />
    </main>
  );
}

import { toast } from 'sonner'

const getReadlist = () => {
  const readlist = localStorage.getItem('books');
  if (readlist) {
    return JSON.parse(readlist);
  }
  return [];
}

const addReadlist = id => {
  const readlist = getReadlist();
  const exist = readlist.find(book => book === id);
  if (exist) {
    return toast.error('Already added to Reading list!');
  }
  readlist.push(id);
  localStorage.setItem('books', JSON.stringify(readlist));
  toast.success('Book added to Reading list successfully!');
}

const getWishlist = () => {
  const wishlist = localStorage.getItem('wish');
  if (wishlist) {
    return JSON.parse(wishlist);
  }
  return [];
}

const addWishlist = id => {
  const readlist = getReadlist();
  const wishlist = getWishlist();

  const existRead = readlist.find(book => book === id);
  const existWish = wishlist.find(book => book === id);

  if (existRead) {
    return toast.error('Already added to Reading list!');
  } else if (existWish) {
    return toast.error('Already added to Wishlist!');
  } else {
    wishlist.push(id);
    localStorage.setItem('wish', JSON.stringify(wishlist));
    toast.success('Book added to Wishlist successfully!');
  }
}

export { addReadlist, addWishlist };
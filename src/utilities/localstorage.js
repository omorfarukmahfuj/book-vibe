import { toast } from 'sonner'

const getReadBooks = () => {
  const readBooks = localStorage.getItem('books');
  if (readBooks) {
    return JSON.parse(readBooks);
  }
  return [];
}

const addReadBooks = id => {
  const readBooks = getReadBooks();
  let wishlist = getWishlist();

  const existRead = readBooks.find(book => book === id);
  const existWish = wishlist.find(book => book === id);

  if (existRead) {
    return toast.error('Already Added To Read Books!');
  } else if (existWish) {
    wishlist = wishlist.filter(bookId => bookId !== id);
    localStorage.setItem('wish', JSON.stringify(wishlist));
    readBooks.push(id);
    localStorage.setItem('books', JSON.stringify(readBooks));
    toast.success('Added To Read Books Successfully!');
  } else {
    readBooks.push(id);
    localStorage.setItem('books', JSON.stringify(readBooks));
    toast.success('Added To Read Books Successfully!');
  }
}

const getWishlist = () => {
  const wishlist = localStorage.getItem('wish');
  if (wishlist) {
    return JSON.parse(wishlist);
  }
  return [];
}

const addWishlist = id => {
  const readBooks = getReadBooks();
  const wishlist = getWishlist();

  const existRead = readBooks.find(book => book === id);
  const existWish = wishlist.find(book => book === id);

  if (existRead) {
    return toast.error('Already Added To Read Books!');
  } else if (existWish) {
    return toast.error('Already Added To Wishlist!');
  } else {
    wishlist.push(id);
    localStorage.setItem('wish', JSON.stringify(wishlist));
    toast.success('Added To Wishlist Successfully!');
  }
}

export { getReadBooks, getWishlist, addReadBooks, addWishlist };
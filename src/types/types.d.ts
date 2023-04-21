interface Products {
    products: Product[],
    total: number,
  }
  
  interface Product {
    id: string,
    title: string,
    price: number,
    images: string[],
    description: string,
    rating: string,
    category: string,
  }
  
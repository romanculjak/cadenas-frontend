import axios from "axios"

export const products = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

export const product = axios.create({
    baseURL: 'https://dummyjson.com/product'
})

export const getProductsPage = async (limit = 10, skip = 0) => {
    const response = await products.get(`?limit=${limit}&skip=${skip}`)
    return response.data
}

export const getProductItem = async (id?:string) => {

    const response = await product.get(`/${id}`)
    return response.data
}
productsArray = [{
    id: 1,
    title: "Nombre del producto",
    description: "Descripción del producto",
    price: 100,
    thumbnail: "https://lh3.google.com/u/0/d/1_klL0hfgL8wMXINYZBxRN5aAvw0lH3eN=w1920-h937-iv1",
    code: "0001",
    stock: 100
}]

class ProductManager {
    constructor(){
        this.products = productsArray
    }
    addProduct(newProduct){
        const product = this.products.find(prod => prod.code === newProduct.code)
        if(product){
            return "Existe el producto con este código"
        }

        if (this.products.length === 0) {
            this.products.push({id: 1, ... newProduct})
        } else {
            this.products.push({id: this.products[this.product.length-1].id + 1, ... newProduct})
        }
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        const product = this.products.find(prod => prod.id === id)
        if (!product){
            return "Not found"
        }
        return product
    }
}

// module.exports = {
//     ProductManager
// }

const productos = new ProductManager()
productos.addProduct({
    id: 1,
    title: "Nombre del producto 2",
    description: "Descripción del producto 2",
    price: 200,
    thumbnail: "https://lh3.google.com/u/0/d/1_klL0hfgL8wMXINYZBxRN5aAvw0lH3eN=w1920-h937-iv1",
    code: "0002",
    stock: 100
})
console.log("todos", productos.getProducts())
console.log("por id", productos.getProductById(2))
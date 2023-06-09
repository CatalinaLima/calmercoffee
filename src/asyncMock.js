const products = [
    {
    id: 1,
    name: "El Gran Gatsby",
    price: 15.99,
    category: "Ficción",
    img: "gg.png",
    stock: 10,
    description: "Una novela clásica que retrata la decadencia de la sociedad en la década de 1920."
    },
    {
    id: 2,
    name: "Cien años de soledad",
    price: 12.99,
    category: "Ficción",
    img: "100.png",
    stock: 5,
    description: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de varias generaciones."
    },
    {
    id: 3,
    name: "El principito",
    price: 9.99,
    category: "Infantil",
    img: "p.png",
    stock: 8,
    description: "Un cuento filosófico que cautiva tanto a niños como a adultos con su mensaje sobre la importancia de la amistad y el amor."
    },
    {
    id: 4,
    name: "1984",
    price: 10.99,
    category: "Ficción",
    img: "1984.jpg",
    stock: 3,
    description: "Una novela distópica que presenta una sociedad controlada por un gobierno autoritario y omnipresente."
    },
    {
    id: 5,
    name: "Orgullo y prejuicio",
    price: 8.99,
    category: "Ficción",
    img: "oyp png.png",
    stock: 12,
    description: "Una historia de amor y desafíos sociales en la Inglaterra del siglo XIX, escrita por Jane Austen."
    }
];


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500);
    })
}


export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === parseInt(productId) ))
        }, 500);
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.category === productCategory ))
        }, 500);
    })
}


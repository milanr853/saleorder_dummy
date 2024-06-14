const productsData = [
    {
        "id": 209,
        "display_id": 8,
        "owner": 1079,
        "name": "Product A",
        "category": "The god of War",
        "characteristics": "New Product Characteristics",
        "features": "",
        "brand": "Product A",
        "sku": [
            {
                "id": 1,
                "selling_price": 54,
                "max_retail_price": 44,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 2,
                "selling_price": 32,
                "max_retail_price": 32,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 3,
                "selling_price": 23,
                "max_retail_price": 21,
                "amount": 22,
                "unit": "kg",
                "quantity_in_inventory": 1,
                "product": 209
            }
        ],
        "updated_on": "2024-05-24T12:46:41.995873Z",
        "adding_date": "2024-05-24T12:46:41.995828Z"
    },
    {
        "id": 210,
        "display_id": 8,
        "owner": 1079,
        "name": "Product B",
        "category": "The god of War",
        "characteristics": "New Product Characteristics",
        "features": "",
        "brand": "Product B",
        "sku": [
            {
                "id": 1,
                "selling_price": 54,
                "max_retail_price": 44,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 2,
                "selling_price": 32,
                "max_retail_price": 32,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
        ],
        "updated_on": "2024-05-24T12:46:41.995873Z",
        "adding_date": "2024-05-24T12:46:41.995828Z"
    },
    {
        "id": 211,
        "display_id": 8,
        "owner": 1079,
        "name": "Product C",
        "category": "The god of War",
        "characteristics": "New Product Characteristics",
        "features": "",
        "brand": "Product C",
        "sku": [
            {
                "id": 1,
                "selling_price": 54,
                "max_retail_price": 44,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
        ],
        "updated_on": "2024-05-24T12:46:41.995873Z",
        "adding_date": "2024-05-24T12:46:41.995828Z"
    },
    {
        "id": 212,
        "display_id": 8,
        "owner": 1079,
        "name": "Product D",
        "category": "The god of War",
        "characteristics": "New Product Characteristics",
        "features": "",
        "brand": "Product D",
        "sku": [
            {
                "id": 1,
                "selling_price": 54,
                "max_retail_price": 44,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 2,
                "selling_price": 32,
                "max_retail_price": 32,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 3,
                "selling_price": 23,
                "max_retail_price": 21,
                "amount": 22,
                "unit": "kg",
                "quantity_in_inventory": 1,
                "product": 209
            },
            {
                "id": 4,
                "selling_price": 23,
                "max_retail_price": 21,
                "amount": 22,
                "unit": "kg",
                "quantity_in_inventory": 1,
                "product": 209
            }
        ],
        "updated_on": "2024-05-24T12:46:41.995873Z",
        "adding_date": "2024-05-24T12:46:41.995828Z"
    },
]



const dataApi = new Promise((resolve, reject) => {
    setTimeout(resolve(productsData), 500)
})

export default async function fetchProducts() {
    const data = await dataApi;
    return data;
};
export const PRODUCTS_HEADERS = ["id", "nombre", "precio", "categoria","existencia","descripcion"]
export const ORDERS_HEADERS = ["id", "products", "date", "customer"];
const CATEGORIAS_PRODUCTOS = [""];
const ESTADO_TRUCK = [""];

const PRODUCTS = [
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },
    {
        id: 123,
        nombre: "Jabón de manos",
        precio: 4_000,
        categoria: CATEGORIAS_PRODUCTOS[0],
        existencia: 20,
        descripcion: "Jabón de 1lt para manos"
    },

];

const PRODUCTPACKAGES = [
    {
        id: 123,
        product_id: 123,
        quantity: 1
    },
    {
        id: 123,
        product_id: 123,
        quantity: 1
    },
    {
        id: 123,
        product_id: 123,
        quantity: 1
    }
];

const ORDERS = [
    {
        id: 432,
        products: PRODUCTPACKAGES,
        date: "10/12/2024",
        customer: "Alexis Orión"
    }
];

const TRUCKS = [
    {
        id: 1,
        fecha: '2024-07-04',
        cliente: 'Cliente 1',
        direccion: 'Dirección 1',
        totalCuenta: '100.50',
        estado: 'pendiente'
    },
    {
        id: 2,
        fecha: '2024-07-03',
        cliente: 'Cliente 2',
        direccion: 'Dirección 2',
        totalCuenta: 7520,
        estado: 'entregado'
    },
    {
        id: 3,
        fecha: '2024-07-02',
        cliente: 'Cliente 3',
        direccion: 'Dirección 3',
        totalCuenta: 15075,
        estado: 'entregado'
    },
    {
        id: 4,
        fecha: '2024-07-01',
        cliente: 'Cliente 4',
        direccion: 'Dirección 4',
        totalCuenta: 20000,
        estado: 'pendiente'
    },
    {
        id: 5,
        fecha: '2024-06-30',
        cliente: 'Cliente 5',
        direccion: 'Dirección 5',
        totalCuenta: 8090,
        estado: 'entregado'
    }
];

export { PRODUCTS, PRODUCTPACKAGES, ORDERS, TRUCKS };
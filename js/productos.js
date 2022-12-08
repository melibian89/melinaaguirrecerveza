// Creacion de la clase Producto
class Producto {
    constructor (nombre, tipo, desc, precio, id){
        this.nombre = nombre.toLowerCase()
        this.precio = parseFloat(precio)
        this.id     = parseInt(id)
        this.tipo = tipo.toLowerCase()
        this.desc  = desc.toLowerCase()
        this.cant   = 0
        this.subtotal = 0
    }
}

// Funciones relacionadas al array de productos
export function crearProducto(productos, nombre, tipo, desc, precio, id){
    const nuevoProducto = new Producto(nombre, tipo, desc, precio, id)
    productos.push(nuevoProducto)
}

export function buscarProductoId(productos, id){
    const productoABuscar = productos.find( producto => producto.id === id)

    if (!productoABuscar){
        throw new Error (`No existe el producto de ${id}`)
    }

    return productoABuscar
}

// Función para filtrar los productos
export function filtrarProductos(productos){
    const filtrado = productos.filter( producto => {
        if ($(`#filtro-tipo`).val() === "" ){
            return producto
        }else if ($(`#filtro-tipo`).val() !== "" ){
            return producto.tipo === $(`#filtro-tipo`).val()
        }else if ($(`#filtro-tipo`).val() === "" ){
            
        }else{
            return producto.tipo === $(`#filtro-tipo`).val() 
        }
    })
    return filtrado
}
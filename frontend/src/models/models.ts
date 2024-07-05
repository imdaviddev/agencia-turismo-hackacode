interface ICliente {
    id_cliente: number,
    nombre: string,
    apellido: string,
    direccion: string,
    dni: string,
    fecha_nac: string,
    nacionalidad: string,
    celular: string,
    email: string,
}

interface IEmpleado extends ICliente {
    cargo: string,
    sueldo: string,
}
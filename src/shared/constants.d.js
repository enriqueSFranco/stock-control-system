const TABLE_HEAD = ['ID', 'Fecha', 'Nombre del cliente', 'Dirección', 'Total de cuenta', 'Estatus']

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
    totalCuenta: 75.20,
    estado: 'entregado'
  },
  {
    id: 3,
    fecha: '2024-07-02',
    cliente: 'Cliente 3',
    direccion: 'Dirección 3',
    totalCuenta: 150.75,
    estado: 'entregado'
  },
  {
    id: 4,
    fecha: '2024-07-01',
    cliente: 'Cliente 4',
    direccion: 'Dirección 4',
    totalCuenta: 200.00,
    estado: 'pendiente'
  },
  {
    id: 5,
    fecha: '2024-06-30',
    cliente: 'Cliente 5',
    direccion: 'Dirección 5',
    totalCuenta: 80.90,
    estado: 'entregado'
  }
]

export { TRUCKS, TABLE_HEAD }

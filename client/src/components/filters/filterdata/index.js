export const filtersByType = {
  current: {
    title: 'Filtrado actual',
  },
  address: { title: 'Dirección', placeholder: 'Buscar por dirección' },
  operation: {
    title: 'Tipo de operación',
    options: [
      { name: 'operation', value: 2, wording: 'Comprar' },
      { name: 'operation', value: 1, wording: 'Alquilar' },
      { name: 'operation', value: 3, wording: 'Temporal' },
      { name: 'operation', value: 0, wording: 'Todos' },
    ],
  },
}

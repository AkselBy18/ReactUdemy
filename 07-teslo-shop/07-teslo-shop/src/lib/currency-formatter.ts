export const CurrencyFormatter = (value: number) => {
    return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    })
}
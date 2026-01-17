import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { CurrencyFormatter } from "@/lib/currency-formatter"
import { useProducts } from "@/shop/hooks/useProducts"
import { PencilIcon, PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {

  const { data } = useProducts();

  return (
    <>
      <AdminTitle
        title="Productos"
        subtitle="Aquí puedes ver y administrar tus productos"
      />

      <div className="flex justify-between item-center mb-5">
        <Link to="/admin/product/new">
          <Button>
            <PlusIcon />
            Nuevo Producto
          </Button>
        </Link>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10 overflow-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data?.products.map(product => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  {product.slug}
                </TableCell>
                <TableCell>
                  <img className="w-3xl" src={product.images[0]} />
                </TableCell>
                <TableCell>
                  <Link to={`/admin/product/${product.slug}`}
                    className="hover:text-blue-600 hover:underline">
                    {product.title}
                  </Link>
                </TableCell>
                <TableCell>
                  ${CurrencyFormatter(product.price)}
                </TableCell>
                <TableCell>
                  {product.gender}
                </TableCell>
                <TableCell>
                  {product.stock} stock
                </TableCell>
                <TableCell>
                  {product.sizes.join(', ')}
                </TableCell>
                <TableCell>

                  <Link
                    to={`/admin/product/${product.id}`}>
                    <Button variant='secondary'
                      className="hover:bg-blue-500 hover:text-white">
                      <PencilIcon
                        className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>


      <CustomPagination totalPages={data?.pages || 0} />
    </>
  )
}

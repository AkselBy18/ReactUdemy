import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
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

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img src="https://placehold.co/100x100" />
            </TableCell>
            <TableCell>Producto 1</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Categoria 1</TableCell>
            <TableCell>100 Stok</TableCell>
            <TableCell>XL, S, L</TableCell>
            <TableCell>
              <Link
                to={`/admin/product/t-shirt-teslo`}>
                Editar
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>


      <CustomPagination totalPages={10} />
    </>
  )
}

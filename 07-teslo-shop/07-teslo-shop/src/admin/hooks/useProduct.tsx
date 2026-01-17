import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-pruduct.action";

export const useProduct = (id: string) => {

    const queryClient =  useQueryClient();

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, //5 minutes
        //enabled: !!id, //Disparar hasta que se obtenga el id
    });

    //TODO: Manejar la mutacion
    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => { 
            console.log('Todo salido bien', product);
            queryClient.invalidateQueries({queryKey: ['products']});
            queryClient.invalidateQueries({
                queryKey: ['product', { id: product.id }]
            });
            //TODO: ->
            //Invalida cache
            //Actualizar query data
            queryClient.setQueryData(['products', {id: product.id}], product);

         }
    });

    //TODO: to delete
/*     const handleSubmit = async (productLike: Partial<Product>) => {
        console.log({ productLike });
    } */

    return {
        ...query,
        mutation,
    }
}

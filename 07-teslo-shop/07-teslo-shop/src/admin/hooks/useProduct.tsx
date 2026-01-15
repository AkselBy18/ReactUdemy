import { useQuery } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id";

export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, //5 minutes
        //enabled: !!id, //Disparar hasta que se obtenga el id
    });

    //TODO: Manejar la mutacion
    

    return {
        ...query
    }
}

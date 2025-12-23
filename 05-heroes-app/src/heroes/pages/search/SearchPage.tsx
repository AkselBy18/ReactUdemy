import { useSearchParams } from "react-router"
import { CustomBreadcrumbs } from "../../../components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron"
import { HeroStats } from "../../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { useQuery } from "@tanstack/react-query"
import { searchHeroAction } from "../../actions/search-heros.action"
import { HeroGrid } from "../../components/HeroGrid"

export const SearchPage = () => {
  
  const [searchParam] = useSearchParams();
  const name = searchParam.get('name') ?? undefined;
  const strength = searchParam.get('strength') ?? undefined;
  
  const { data: heroesSearch } = useQuery({
    queryKey: ['heroes', 'search', { name, strength }],
    queryFn: () => searchHeroAction({name, strength}),
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  return (
    <>
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Descubre, explora y administra super heroes"
      />

      <CustomBreadcrumbs
        currentPage="Buscar Herores"
      />

      <HeroStats />

      {/* Filter search */}
      <SearchControls />

      {/* HEROES RESULT */}
      <HeroGrid heroes={heroesSearch}/>
    </>
  )
}

export default SearchPage
import { CustomBreadcrumbs } from "../../../components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron"
import { HeroStats } from "../../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

export const SearchPage = () => {
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
    </>
  )
}

export default SearchPage
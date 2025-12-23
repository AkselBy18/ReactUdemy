import { use, useMemo } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { HeroGrid } from "../../components/HeroGrid";
import { CustomPagination } from "../../../components/custom/CustomPagination";
import { CustomBreadcrumbs } from "../../../components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useHeroSummary } from "../../hooks/useHeroSummary";
import { userPaginatedHero } from "../../hooks/userPaginatedHero";
import { FavoriteHeroContext } from "../../context/FavoriteHeroContext";


type Tabs = 'all' | 'favorites' | 'heroes' | 'villains';

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites, favoriteCount } = use(FavoriteHeroContext);

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTap = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data: heroesResponse } = userPaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de superheroes"
          description="Descubre, explora y administra super heroes"
        />

        {/*  */}
        <CustomBreadcrumbs
          currentPage="Super Héroes"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTap} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'all');
                prev.set('category', 'all');
                prev.set('page', '1');
                return prev;
              })}
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'favorites')
                return prev;
              })}
            >
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'heroes');
                prev.set('category', 'hero');
                prev.set('page', '1');
                return prev;
              })}
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'villains')
                prev.set('category', 'villain');
                prev.set('page', '1');
                return prev;
              })}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* ALL HEROES */}
            <HeroGrid
              heroes={heroesResponse?.heroes}
            />
          </TabsContent>

          <TabsContent value="favorites">
            {/* FAVORITES */}
            <HeroGrid
              heroes={favorites} />
          </TabsContent>

          <TabsContent value="heroes">
            {/* Heroes */}
            <HeroGrid
              heroes={heroesResponse?.heroes} />
          </TabsContent>

          <TabsContent value="villains">
            {/* VILLAINS */}
            <HeroGrid
              heroes={heroesResponse?.heroes} />
          </TabsContent>

        </Tabs>


        {/* Pagination */}

        {selectedTap !== 'favorites' && (
          <CustomPagination
            totalPages={heroesResponse?.pages ?? 1}
          />
        )}
      </>
    </>
  )
}
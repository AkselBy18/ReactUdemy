import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { HeroGrid } from "../../components/HeroGrid";
import { CustomPagination } from "../../../components/custom/CustomPagination";
import { CustomBreadcrumbs } from "../../../components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "../../actions/get-heroes-by-page.action";

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5 //5 minutes
  });

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
              onClick={() => setActiveTab('all')}
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() => setActiveTab('heroes')}
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
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
              heroes={[]}/>
          </TabsContent>

          <TabsContent value="heroes">
            {/* Heroes */}
            <HeroGrid
              heroes={[]}/>
          </TabsContent>

          <TabsContent value="villains">
            {/* VILLAINS */}
            <HeroGrid
              heroes={[]}/>
          </TabsContent>

        </Tabs>


        {/* Pagination */}
        <CustomPagination
          totalPages={8}
        />
      </>
    </>
  )
}
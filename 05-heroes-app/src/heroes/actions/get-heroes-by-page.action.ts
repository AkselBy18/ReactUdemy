import type { HeroResponse } from "../../types/get-heroes-response";
import { heroApi } from "../api/hero.api"

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HeroResponse> => {
    const { data } = await heroApi.get<HeroResponse>('/');

    const heroes = data.heroes.map(hero => ({
        ...hero,
        image:`${BASE_URL}/images/${hero.image}`,
    }))
    return {
        ...data,
        heroes: heroes
    }
}
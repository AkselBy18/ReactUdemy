import { Link, useLocation } from "react-router"
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"
import { cn } from "../../lib/utils";

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* HOME */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}
                    >
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* SEARCH */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/search') && 'bg-slate-200', 'rounded-md p-2')}
                    >
                        <Link to="/search">Buscar Superheroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

import type { RouteObject } from "react-router-dom";

type SearchableRoute = {
  path: string;
  title: string;
};

export const getSearchableRoutes = (
  routes: RouteObject[],
  parentPath = "",
): SearchableRoute[] => {
  let flatRoutes: SearchableRoute[] = [];

  routes.forEach((route) => {
    const currentPath = route.path
      ? `${parentPath}/${route.path}`.replace(/\/+/g, "/") // remove double slashes
      : parentPath;

    // 2. If the route has a title in 'handle', add it to our list
    if (route.handle && (route.handle as any).title) {
      // Exclude routes with parameters (like :id) because we can't link to them directly
      if (!currentPath.includes(":")) {
        flatRoutes.push({
          path: currentPath,
          title: (route.handle as any).title,
        });
      }
    }

    // 3. Recursive call for children
    if (route.children) {
      flatRoutes = [
        ...flatRoutes,
        ...getSearchableRoutes(route.children, currentPath),
      ];
    }
  });

  return flatRoutes;
};

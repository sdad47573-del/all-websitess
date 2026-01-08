import { Link } from "@tanstack/react-router";
import placeholder from "@assets/placeholder-600x600.webp";

type Listprops = {
  items: string[];
};

export const List = ({ items }: Listprops) => {
  return (
    <div
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      id="acciones-list-container"
    >
      {items.map((item) => (
        <Link key={item} to="./$name" params={{ name: item }}>
          <div className="border-base-300 bg-base-100 overflow-hidden rounded-xl border shadow-md transition-all duration-200 hover:shadow-lg hover:border-primary/30 dark:border-base-content/10 dark:hover:border-primary/50 active:scale-95 cursor-pointer">
            <div className="bg-base-200 relative aspect-square overflow-hidden">
              <img
                src={placeholder}
                alt={item}
                title={item}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base-content mb-1 truncate text-sm font-semibold">
                {item}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-base-content/60 text-xs">Ver detalle</span>
                <i className="ri-arrow-right-line text-primary text-lg" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

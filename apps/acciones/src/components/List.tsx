import { Link } from "@tanstack/react-router";

type Listprops = {
  items: string[];
};

export const List = ({ items }: Listprops) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li>
      {items.map((item) => (
        <li key={item} className="list-row">
          <div></div>
          <div>
            <div>{item}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {/* Remaining Reason */}
            </div>
          </div>
          <Link to="./$name" params={{ name: item }}>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

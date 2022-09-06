import classes from "./CategoryLinks.module.css";
import { useRouter } from "next/router";

const CategoryLinks = (props) => {
  const router = useRouter();
  return (
    <div className="mt-3">
      <ul className={classes.list}>
        {props.categories.map((category, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                router.push(`/products/category/${category}`);
              }}
            >
              {`${category.slice(0, 1).toUpperCase()}${category.slice(1)}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryLinks;

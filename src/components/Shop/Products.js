import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Atomic Habits",
    description: "James Clear",
  },
  {
    id: "p2",
    price: 10,
    title: "The Gulag Archipelago",
    description: "Aleksandr Solzhenitsyn",
  },
  {
    id: "p3",
    price: 12,
    title: "12 Rules For Life: An Antidote to Chaos",
    description: "Jordan Peterson",
  },
  {
    id: "p4",
    price: 15,
    title: "The Ecological Approach to Visual Perception",
    description: "James J. Gibson",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

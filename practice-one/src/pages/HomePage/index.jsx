import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "../../layouts/Container";
import Search from "../../components/Search";
import Button from "../../components/Button";
import ProductList from "../../components/ProductList";
import "./index.css";

fontawesome.library.add(faPlus);

const HomePage = () => {
  const products = [
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
    {
      id: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
      title: "Sam sung A31",
      price: 230000,
    },
  ];

  return (
    <div className="home-page">
      <section className="products-action-section">
        <Container>
          <div className="products-actions">
            <Search />
            <Button
              type="button"
              className="btn-add"
              variant="variant"
              size="regular"
            >
              <FontAwesomeIcon icon="fa-solid fa-plus" />
              <span>Add product</span>
            </Button>
          </div>
        </Container>
      </section>
      <section className="product-list-section">
        <Container>
          <ProductList products={products} />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

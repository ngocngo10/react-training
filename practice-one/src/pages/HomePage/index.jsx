import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "../../layouts/Container";
import Search from "../../components/Search";
import Button from "../../components/Button";
import "./index.css";

fontawesome.library.add(faPlus);

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="products-action-section">
        <Container>
          <div className="products-actions">
            <Search />
            <Button type="button" className="btn-add">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

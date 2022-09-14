import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "../../layouts/Container";
import Search from "../../components/Search";
import Button from "../../components/Button";

fontawesome.library.add(faPlus);

const HomePage = () => {
  return (
    <>
      <section className="products-section">
        <Container>
          <div className="products-header">
            <Search />
            <Button type="button" className="btn-add">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;

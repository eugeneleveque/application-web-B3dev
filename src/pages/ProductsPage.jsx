import React, { useState } from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import styled from "styled-components";

const ProductsPage = () => {
  const [filters, setFilters] = useState({ category: "All", price: 20 });

  return (
    <Wrapper>
      <aside>
        <Filters filters={filters} setFilters={setFilters} />
      </aside>
      <main>
        <ProductList filters={filters} />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  padding: 2rem;
`;

export default ProductsPage;

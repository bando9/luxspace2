import React from "react";
import Header from "../parts/Header";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function HomePages() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1234", name: "Office Room" },
          { url: "/categories/1234/products/789", name: "Details" },
        ]}
      />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}

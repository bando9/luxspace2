import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";
import Sitemap from "../parts/Sitemap";

export default function NotFound() {
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}

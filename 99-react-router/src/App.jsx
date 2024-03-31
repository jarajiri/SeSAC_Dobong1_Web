import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import PhotoPage from "./pages/PhotoPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useEffect, useState } from "react";
import axios from "axios";
import PhotoDetailPage from "./pages/PhotoDetailPage";

function App() {
  const tempProductData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];

  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(res.data.slice(0, 10));
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductPage products={tempProductData} />} />
        <Route path="/photos" element={<PhotoPage photos={photos} />} />
        <Route path="/products/:productId" element={<ProductDetailPage products={tempProductData} />} />
        <Route path="/photos/:photoId" element={<PhotoDetailPage photos={photos} />} />
      </Routes>
    </>
  );
}

export default App;

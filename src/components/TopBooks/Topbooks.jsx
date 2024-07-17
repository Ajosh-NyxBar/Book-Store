import React from "react";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.webp";
import book3 from "../../assets/book3.png";
import { FaStar } from "react-icons/fa";

const dataBuku = [
  {
    id: 1,
    image: book1,
    penulis: "Dr. Robingatun. M.Pd.I., dkk",
    title: "Ilmu Ilmu Keislaman",
    rating: 5.0,
    description:
      "Buku ini memberikan wawasan mendalam tentang ilmu keislaman, mencakup berbagai aspek dari sejarah hingga praktik kontemporer. Ditulis dengan bahasa yang mudah dipahami, sangat direkomendasikan bagi siapa saja yang ingin memperdalam pengetahuan mereka tentang Islam. Buku ini juga membahas berbagai topik seperti teologi, hukum Islam, dan sejarah peradaban Islam, memberikan pembaca pemahaman yang komprehensif dan mendalam.",
  },
  {
    id: 2,
    image: book2,
    penulis: "Ajosh",
    title: "Business Solution",
    rating: 5.0,
    description:
      "Buku ini menawarkan solusi bisnis yang inovatif dan praktis. Cocok untuk para profesional yang ingin meningkatkan efisiensi dan efektivitas dalam dunia bisnis modern. Buku ini mencakup berbagai strategi bisnis, studi kasus, dan teknik manajemen yang dapat diterapkan dalam berbagai situasi bisnis. Dengan pendekatan yang praktis dan berbasis bukti, buku ini menjadi panduan yang sangat berguna bagi para pengusaha dan manajer.",
  },
  {
    id: 3,
    image: book3,
    penulis: "Ajosh",
    title: "Dark",
    rating: 5.0,
    description:
      "Buku ini mengisahkan cerita misteri yang penuh dengan ketegangan dan intrik. Sangat cocok bagi para penggemar genre thriller dan suspense. Cerita ini mengikuti perjalanan seorang detektif yang mencoba memecahkan serangkaian pembunuhan misterius. Dengan plot yang penuh liku dan karakter yang kompleks, buku ini akan membuat pembaca terus terjaga hingga halaman terakhir.",
  },
  {
    id: 4,
    image: book2,
    penulis: "Ajosh",
    title: "Dark",
    rating: 5.0,
    description:
      "Buku ini mengisahkan cerita misteri yang penuh dengan ketegangan dan intrik. Sangat cocok bagi para penggemar genre thriller dan suspense. Cerita ini mengikuti perjalanan seorang detektif yang mencoba memecahkan serangkaian pembunuhan misterius. Dengan plot yang penuh liku dan karakter yang kompleks, buku ini akan membuat pembaca terus terjaga hingga halaman terakhir.",
  },
  {
    id: 5,
    image: book1,
    penulis: "Ajosh",
    title: "Dark",
    rating: 5.0,
    description:
      "Buku ini mengisahkan cerita misteri yang penuh dengan ketegangan dan intrik. Sangat cocok bagi para penggemar genre thriller dan suspense. Cerita ini mengikuti perjalanan seorang detektif yang mencoba memecahkan serangkaian pembunuhan misterius. Dengan plot yang penuh liku dan karakter yang kompleks, buku ini akan membuat pembaca terus terjaga hingga halaman terakhir.",
  },
];
const Topbooks = () => {
  return (
    <>
      <div>
        <div className="container py-10">
          {/* Header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Temukan buku-buku terbaik yang sedang trending saat ini. Dari ilmu
              keislaman hingga solusi bisnis, kami memiliki koleksi yang beragam
              untuk memenuhi kebutuhan bacaan Anda.
            </p>
          </div>
          {/* Card */}
          <div className="py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {dataBuku.map((book) => {
                return (
                  <div key={book.id} className="space-y-3">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-[220px] w-[150px] object-cover rounded-md hover:scale-105 duration-200"
                    />
                    <div>
                      <h2 className="font-semibold">{book.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{book.penulis}</p>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <span>{book.rating}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2
              px-5 rounded-full hover:scale-105 duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary
              dark:bg-secondary dark:text-white">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbooks;

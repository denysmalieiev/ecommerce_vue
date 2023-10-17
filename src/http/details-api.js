import PhotoIphone15 from "../assets/phone.jpeg";
import S23 from "../assets/s23.jpeg";
import MacBook from "../assets/macbook.jpeg";
import Acer from "../assets/acer.jpeg";
import Watch from "../assets/watch.jpeg";
import Watch2 from "../assets/watch2.jpeg";
import Watch3 from "../assets/watch3.jpeg";

export const DetailsApi = {
  productInfo() {
    const data = {
      status: 200,
      data: {
        src: Watch,
        title: "Smart Watch",
        rating: 5,
        price: 85,
      },
    };

    return new Promise(res => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
  },
  relatedProducts() {
    const data = {
      status: 200,
      data: [
        { id: 1, src: Acer, title: "Smart Watch", price: "60" },
        { id: 2, src: Watch2, title: "MacBook", price: "1800" },
        { id: 3, src: PhotoIphone15, title: "Phone", price: "700" },
        { id: 4, src: S23, title: "Smart Watch", price: "95" },
        { id: 5, src: Watch3, title: "Smart Watch", price: "85" },
        { id: 6, src: MacBook, title: "MacBook", price: "1500" },
      ],
    };

    return new Promise(res => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
  },
};

import PhotoIphone15 from "../assets/phone.jpeg";
import S23 from "../assets/s23.jpeg";
import MacBook from "../assets/macbook.jpeg";
import Acer from "../assets/acer.jpeg";
import Lenovo from "../assets/lenovo.jpeg";
import Watch from "../assets/watch.jpeg";
import Watch2 from "../assets/watch2.jpeg";
import Watch3 from "../assets/watch3.jpeg";

import HomeBanner from "../assets/iphone15.jpg";
import HomeBannerPhones from "../assets/banner-phones.jpg";

const homeBannersData = [
  {
    id: 1,
    src: HomeBanner,
  },
  {
    id: 2,
    src: HomeBannerPhones,
  },
];

export const HomeApi = {
  homeBanners() {
    return new Promise(res => {
      setTimeout(() => {
        res({ status: 200, data: homeBannersData });
      }, 1000);
    });
  },
  homeSections() {
    const response = {
      status: 200,
      data: [
        {
          id: 1,
          title: "Electronics",
          items: [
            { id: 1, src: Watch, title: "Smart Watch", price: "60" },
            { id: 2, src: MacBook, title: "MacBook", price: "1800" },
            { id: 3, src: PhotoIphone15, title: "Phone", price: "700" },
            { id: 4, src: Watch3, title: "Smart Watch", price: "95" },
            { id: 5, src: Watch2, title: "Smart Watch", price: "85" },
            { id: 6, src: MacBook, title: "MacBook", price: "1500" },
          ],
          type: "carousel",
        },
        {
          id: 2,
          title: "Computers",
          items: [
            { id: 1, src: MacBook, title: "MacBook Air", price: "1500" },
            { id: 2, src: Acer, title: "Acer", price: "1000" },
            { id: 3, src: Lenovo, title: "Lenovo", price: "900" },
            { id: 4, src: MacBook, title: "MacBook Air", price: "1400" },
            { id: 5, src: Acer, title: "Acer", price: "800" },
            { id: 6, src: Lenovo, title: "Lenovo", price: "750" },
          ],
          type: "carousel",
        },
        {
          id: 3,
          type: "banner",
          src: HomeBanner,
        },
        {
          id: 4,
          title: "Mobile phone",
          items: [
            { id: 1, src: PhotoIphone15, title: "Phone", price: "1200" },
            { id: 2, src: S23, title: "Phone", price: "800" },
            { id: 3, src: PhotoIphone15, title: "Phone", price: "900" },
            { id: 4, src: S23, title: "Phone", price: "850" },
            { id: 5, src: PhotoIphone15, title: "Phone", price: "600" },
            { id: 6, src: S23, title: "Phone", price: "500" },
          ],
          type: "carousel",
        },
        {
          id: 5,
          title: "Smart watches",
          items: [
            { id: 1, src: Watch, title: "Phone", price: "55" },
            { id: 2, src: Watch2, title: "Phone", price: "70" },
            { id: 3, src: Watch, title: "Phone", price: "68" },
            { id: 4, src: Watch2, title: "Phone", price: "90" },
            { id: 5, src: Watch, title: "Phone", price: "120" },
            { id: 6, src: Watch2, title: "Phone", price: "80" },
          ],
          type: "carousel",
        },
        {
          id: 6,
          type: "banner",
          src: HomeBannerPhones,
        },
      ],
    };

    return new Promise(res => {
      setTimeout(() => {
        res(response);
      }, 1000);
    });
  },
};

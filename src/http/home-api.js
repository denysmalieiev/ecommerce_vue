import HomeBannerUrl from "../assets/banner.jpg";

const homeBannersData = [
  {
    id: 1,
    banner: "banner",
    src: HomeBannerUrl,
  },
  {
    id: 2,
    banner: "bandf",
    src: HomeBannerUrl,
  },
  {
    id: 3,
    banner: "bandf",
    src: HomeBannerUrl,
  },
  {
    id: 4,
    banner: "bandf",
    src: HomeBannerUrl,
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
};

"use client";
import "./BodyContant.css";

import allRightContant from "../Assets/RightContant";
import allRightShopContant from "../Assets/RightShopContant";
import LeftContant from "../LeftContant/LeftContant";
import BigCarts from "../BigCarts/BigCarts";
import SmallCarts from "../SmallCarts/SmallCarts";
import RightContant from "../RightContant/RightContant";
import RightShopContant from "../RightShopContant/RightShopContant";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { IonIcon } from "ionicons";

const handleLeftContantApi = async () => {
  const res = await fetch("http://localhost:3000/Api/latest-news-g", {
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });
  const resPosts = await res.json();

  return resPosts;
};

const handleCenterContantBigDataCardsApi = async () => {
  const res = await fetch("http://localhost:3000/Api/top-news-g", {
    headers: {
      "contant-type": "application/json",
    },
    cache: "no-store",
  });
  const resPosts = await res.json();
  return resPosts;
};

const handleCenterContantSmallDataCardsApi = async () => {
  const res = await fetch("http://localhost:3000/Api/top-news-small-g", {
    headers: {
      "contant-type": "application/json",
    },
    cache: "no-store",
  });
  const resPosts = await res.json();
  return resPosts;
};

const handleAdminContantCenterDataApi = async () => {
  const res = await fetch("http://localhost:3000/Api/admin-g", {
    headers: {
      "contant-type": "application/json",
    },
    cache: "no-store",
  });
  const resPost = await res.json();
  return resPost;
};

const BodyContant = () => {
  const [leftContentApi, setLeftContentApi] = useState({ data: [] });
  const [bigDataCardsApi, setBigDataCardsApi] = useState({ data: [] });
  const [smallDataCardsApi, setSmallDataCardsApi] = useState({ data: [] });
  const [adminCenterDataApi, setadminCenterDataApi] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      const leftContentApi = await handleLeftContantApi();
      setLeftContentApi(leftContentApi);
      const bigDataCardsApi = await handleCenterContantBigDataCardsApi();
      setBigDataCardsApi(bigDataCardsApi);
      const smallDataCardsApi = await handleCenterContantSmallDataCardsApi();
      setSmallDataCardsApi(smallDataCardsApi);
      const adminCenterDataApi = await handleAdminContantCenterDataApi();
      setadminCenterDataApi(adminCenterDataApi);
    })();
  }, []);

  return (
    <>
      <div className="bodyContentContainer">
        <div className="bodyContentContainerLeft">
          <div className="latestNews">
            <div className="latestHeading">
              <p>
                <span>[</span>LATEST NEWS<span>]</span>
              </p>
            </div>

            {leftContentApi.data.slice(0, 4).map((item: any) => {
              return (
                <LeftContant
                  title={item.title}
                  description={item.description}
                />
              );
            })}

            <div className="btnArrow">
              <div className="viewAllBtn">
                <button>View All</button>
              </div>
              <div className="arrow">
                {/*   <ion-icon name="chevron-forward-outline"></ion-icon> */}
                {/* <IonIcon name="chevron-forward-outline" /> */}
              </div>
            </div>
          </div>
          <div className="mostRead">
            <div className="latestHeading">
              <p>
                <span>[</span>MOST READ<span>]</span>
              </p>
            </div>
            <div className="indiaNewsContent">
              {leftContentApi.data.slice(4, 8).map((item: any) => {
                return (
                  <LeftContant
                    title={item.title} // this line is new added in next js
                    description={item.description}
                  />
                );
              })}
            </div>

            <div className="btnArrow">
              <div className="viewAllBtn">
                <button>View All</button>
              </div>
              <div className="arrow">
                {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
                {/* <IonIcon name="chevron-forward-outline" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bodyContentContainerCenter">
          <div className="runningHeading">
            <button>Live</button>
            {/* <p className="moveCaption">Arvind Kejriwal News LIVE: Coming straight from jail t</p> */}
          </div>
          <div className="topNewsHeading">
            <p>
              <span>[</span>TOP NEWS<span>]</span>
            </p>
          </div>
          {/* Api data */}
          {bigDataCardsApi.data.map((item: any) => {
            if (item.id == 1) {
              return <BigCarts title={item.title} image={item.image} />;
            }
          })}

          {smallDataCardsApi.data.slice(0, 4).map((item: any) => (
            <SmallCarts title={item.title} image={item.image} />
          ))}

          <div className="topNewsHeading">
            <p>
              <span>[</span>DON'T MISS<span>]</span>
            </p>
          </div>

          {bigDataCardsApi.data.map((item: any) => {
            if (item.id == 2) {
              return <BigCarts title={item.title} image={item.image} />;
            }
          })}

          {smallDataCardsApi.data.slice(4, 8).map((item: any) => (
            <SmallCarts title={item.title} image={item.image} />
          ))}

          <div className="topNewsHeading">
            <p>
              <span>[</span>CRICKET<span>]</span>
            </p>
          </div>

          {bigDataCardsApi.data.map((item: any) => {
            if (item.id == 3) {
              return <BigCarts title={item.title} image={item.image} />;
            }
          })}

          {smallDataCardsApi.data.slice(8, 12).map((item: any) => (
            <SmallCarts title={item.title} image={item.image} />
          ))}

          {adminCenterDataApi.data.map((item: any) => {
            return <SmallCarts title={item.title} image={item.image} />;
          })}
        </div>
        <div className="bodyContentContainerRight">
          <div className="bodyContainerRightHindustanImage">
            <Image
              src="https://tpc.googlesyndication.com/simgad/14965938457399886788"
              height={100}
              width={286}
              alt="addImg"
            />

            <Image
              src="https://www.hindustantimes.com/static-content/1y/rhs-economist-banner-march24.jpg"
              alt="hindustanImg"
              height={100}
              width={286}
            />
          </div>
          <div className="latestHeading">
            <p>
              <span>[</span>HT PREMIUME<span>]</span>
            </p>
          </div>
          <div className="htPremiumeContant">
            {allRightContant.map((item) => {
              return (
                <RightContant
                  description={item.description}
                  image={item.image}
                  BigDescription={item.BigDescription}
                  BigImage={item.BigImage}
                />
              );
            })}
          </div>

          <div className="btnArrow vieAllBtn">
            <div className="viewAllBtn">
              <button>View All</button>
            </div>
            <div className="arrow ">
              {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
              {/* <IonIcon name="chevron-forward-outline" /> */}
            </div>
          </div>

          <div className="latestHeading">
            <p className="htPremiumeHeader">
              <span>[</span>In Pics<span>]</span>
            </p>
          </div>
          {allRightContant.map((item) => {
            return (
              <RightContant
                description={item.description}
                image={item.image}
                BigDescription={item.BigDescription}
                BigImage={item.BigImage}
              />
            );
          })}

          <div className="btnArrow vieAllBtn">
            <div className="viewAllBtn">
              <button>View All</button>
            </div>
            <div className="arrow ">
              {/* <ion-icon name="chevron-forward-outline" /> */}
              {/* <IonIcon name="chevron-forward-outline" /> */}
            </div>
          </div>
          <div className="shopNow">
            <div className="latestHeading">
              <p className="htPremiumeHeader">
                <span>[</span>Shop Now<span>]</span>
              </p>
            </div>
            <div className="shopNowNavbar">
              <ul>
                <li>Best Deals</li>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Beauty</li>
              </ul>
            </div>
            {allRightShopContant.map((item) => {
              return (
                <RightShopContant
                  image={item.image}
                  description={item.description}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyContant;

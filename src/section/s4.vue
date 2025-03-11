<template>
  <section class="s4 w-full relative">
    <img class="en block" src="@/section/s4/en.svg" data-aos="fade" data-aos-duration="1000" data-aos-delay="0" />
    <div class="t1 text-[#DFC36C] font-['Noto_Serif_TC']" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">北市精工團隊 <br class="md:hidden">美學建築再現新北</div>
    <div class="t2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">匯聚一眾建築指標精銳團隊，從建築、設計到燈光，<br>以不容妥協的細節講究，進駐新北打造全新代表之作。</div>
    <div class="line"></div>
    <div class="items">
      <div v-for="(item, itemIdx) in list" class="item md:flex md:justify-between">
        <div class="person flex">
          <div class="person-photo" data-aos="fade" data-aos-duration="1000" data-aos-delay="0">
            <img class="w-full block" :src="getImg(`./s4/${itemIdx + 1}/person.webp`)" />
          </div>
          <div class="person-info">
            <div class="person-info-title text-[#DFC36C] font-['Noto_Serif_TC']">{{item.person.title}}</div>
            <div v-html="item.person.desc" class="person-info-desc font-['Noto_Serif_TC']"></div>
          </div>
        </div>
        <div class="md:flex md:flex-col-reverse md:justify-end">
          <div class="photos">
            <div v-for="(photoItem, photoItemIdx) in item.photos" class="photo relative" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="photoItemIdx * 200">
              <img class="w-full block" :src="getImg(`./s4/${itemIdx + 1}/photo${photoItemIdx + 1}.webp`)" />
              <div class="photo-name absolute" v-html="photoItem.name" :style="{color: photoItem.nameColor ?? null}"></div>
              <div class="photo-info absolute">{{photoItem.info}}</div>
            </div>
          </div>
          <div class="ens flex" data-aos="fade" data-aos-duration="1000" data-aos-delay="0">
            <div class="person-info-title hidden md:block text-[#DFC36C] font-['Noto_Serif_TC']">{{item.person.title}}</div>
            <img class="en-main block" :src="getImg(`./s4/${itemIdx + 1}/en.svg`)" />
            <img class="en-small block" :src="getImg(`./s4/${itemIdx + 1}/en-small.svg`)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  color: #fff;
  background: #C68865;
  background-image: url(@/section/s4/bg-m.webp);
  background-size: cover;
  background-position: center center;
  padding: size-m(14) 0 size-m(73) 0;
  @media screen and (min-width:768px) {
    background-image: url(@/section/s4/bg.webp);
    padding: size(90) 0 size(221) 0;
  }

  .en {
    width: size-m(310);
    margin: 0 auto size-m(65.16) auto;
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(891.45);
      margin: 0 auto size(29.73) auto;
    }
  }

  .t1 {
    text-align: center;
    font-size: size-m(24);
    line-height: size-m(38);
    text-align: center;
    font-weight: 600;
    letter-spacing: .18em;
    margin: 0 0 size-m(13) 0;
    @media screen and (min-width:768px) {
      font-size: size(52);
      line-height: size(85);
      margin: 0 0 size(42) 0;
      letter-spacing: .2em;
    }
  }

  .t2 {
    padding: 0 size-m(26);
    font-size: size-m(13);
    line-height: size-m(26);
    letter-spacing: .03em;
    text-align: justify;
    margin-bottom: size-m(15.14);
    @media screen and (min-width:768px) {
      padding: 0;
      font-size: size(23);
      line-height: size(41);
      display: flex;
      justify-content: center;
    }
  }

  .line {
    width: size-m(321);
    height: size-m(2);
    border-top: size-m(1) solid #C68865;
    border-bottom: size-m(1) solid #C68865;
    margin: 0 auto size-m(77.14) auto;
    mix-blend-mode: multiply;
    @media screen and (min-width:768px) {
      width: size(1190);
      height: size(7);
      border-top-width: size(1);
      border-bottom-width: size(1);
      margin: 0 auto size(115) auto;
    }
  }

  .items {
    .item {
      margin-bottom: size-m(101);
      @media screen and (min-width:768px) {
        width: size(1198);
        margin: 0 auto size(179) auto;
        align-items: center;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .person {
        justify-content: center;
        margin-bottom: size-m(11);
        @media screen and (min-width:768px) {
          margin-bottom: 0;
          display: block;
        }

        .person-photo {
          width: size-m(101);
          @media screen and (min-width:768px) {
            width: size(349);
            margin-bottom: size(23);
          }
        }
        
        .person-info {
          padding: 0 0 0 size-m(26);
          @media screen and (min-width:768px) {
            padding: 0;
          }

          .person-info-title {
            font-size: size-m(20);
            line-height: size-m(38);
            font-weight: 600;
            letter-spacing: .18em;
            @media screen and (min-width:768px) {
              display: none;
            }
          }

          .person-info-desc {
            font-size: size-m(15);
            line-height: size-m(26);
            font-weight: 600;
            letter-spacing: .18em;
            @media screen and (min-width:768px) {
              font-size: size(30);
              line-height: size(46);
              letter-spacing: .13em;
            }

            img {
              display: inline-block;
              width: auto;
              height: size-m(17);
              margin-left: .18em;
              @media screen and (min-width:768px) {
                height: size(32);
              }
            }
          }
        }
      }

      .photos {
        display: flex;
        justify-content: space-between;
        margin-bottom: size-m(13);
        @media screen and (min-width:768px) {
          width: size(765);
          margin-bottom: 0;
        }

        .photo {
          width: 32.68%;

          .photo-name {
            top: size-m(4);
            right: size-m(4);
            font-size: size-m(11);
            line-height: size-m(13);
            letter-spacing: .18em;
            writing-mode: vertical-lr;
            @media screen and (min-width:768px) {
              top: size(13);
              right: size(8);
              font-size: size(17);
              line-height: size(19);
              letter-spacing: .13em;
            }

            span {
              writing-mode: initial;
              transform: translate(.25em, 0);
              @media screen and (min-width:768px) {
                transform: translate(.25em, .18em);
              }
            }
          }

          .photo-info {
            top: size-m(4);
            left: size-m(5);
            font-size: size-m(7);
            letter-spacing: .13em;
            @media screen and (min-width:768px) {
              top: auto;
              bottom: size(8);
              left: auto;
              right: size(6);
              font-size: size(9);
            }
          }
        }
      }

      .ens {
        position: relative;
        width: size-m(310);
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 auto;
        @media screen and (min-width:768px) {
          width: size(773);
          margin: 0 0 size(16) 0;
          padding-bottom: size(32);
          flex-direction: row-reverse;
          align-items: center;
        }

        .person-info-title {
          font-size: size(49);
          line-height: size(59);
          font-weight: 600;
          letter-spacing: .15em;
        }

        .en-main {
          width: auto;
          height: size-m(16);
          @media screen and (min-width:768px) {
            height: size(39);
          }
        }

        .en-small {
          width: auto;
          height: size-m(8);
          @media screen and (min-width:768px) {
            height: size(19);
            position: absolute;
            bottom: 0;
            right: .4vw;
          }
        }
      }

      &:nth-child(2) {
        .photos .photo {
          .photo-name {
            right: auto;
            left: size-m(3);
            @media screen and (min-width:768px) {
              left: size(10);
            }
          }
          
          .photo-info {
            left: auto;
            right: size-m(5);
            @media screen and (min-width:768px) {
              bottom: size(8);
              right: size(6);
            }
          }
        }
      }

      &:nth-child(4) {
        .ens {
          width: size-m(314);
          @media screen and (min-width:768px) {
            width: size(773);
          }

          .en-main {
            height: size-m(12);
            @media screen and (min-width:768px) {
              height: size(26);
            }
          }

          .en-small {
            height: size-m(6);
            @media screen and (min-width:768px) {
              height: size(17);
            }
          }
        }
      }

      &:nth-child(even) {
        flex-direction: row-reverse;

        .person {
          flex-direction: row-reverse;

          .person-info {
            padding: 0 size-m(26) 0 0;
            @media screen and (min-width:768px) {
              padding: 0;
            }
          }
        }

        .ens {
          flex-direction: row-reverse;

          .en-small {
            right: auto;
            left: 0;
          }
        }
      }
    }
  }
}
</style>

<script setup>
const images = import.meta.globEager('./s4/**/*.*');
const getImg = path => images[path]?.default || '';

const list = [
  {
    person: {
      title: '雕塑城市記憶',
      desc: '建築規劃 王成維建築師<br>王成維建築師事務所',
    },
    photos: [
      {
        name: '大同區　寶國建築',
        info: '實景拍攝圖',
      },
      {
        name: '新莊區　群曜維美',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
      {
        name: '桃園市　大亮睦粼',
        info: '實景拍攝圖',
      },
    ],
  },
  {
    person: {
      title: '注入文化美學',
      desc: '公設設計 徐嫡嬪總監<br>沐易設計有限公司',
    },
    photos: [
      {
        name: '中山區　昀集柏寓',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
      {
        name: '中山區　昀集柏寓',
        info: '實景拍攝圖',
      },
      {
        name: '奎克咖啡　台中惠中店',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
    ],
  },
  {
    person: {
      title: '燈光映照詩意',
      desc: '燈光設計 賴雨農總監<br>十聿照明設計有限公司',
    },
    photos: [
      {
        name: '台北101',
        info: '實景拍攝圖',
      },
      {
        name: '高雄萬豪酒店',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
      {
        name: '曼谷瑰麗酒店',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
    ],
  },
  {
    person: {
      title: '業界防水權威',
      desc: `防水保固<img src="${getImg('./s4/4/logo.svg')}"><br>大信防水工程有限公司`,
    },
    photos: [
      {
        name: '華固天鑄',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
      {
        name: '和平大苑',
        info: '實景拍攝圖',
      },
      {
        name: '元利<span>O<br>N<br>E<br>　<br>P<br>A<br>R<br>K</span>',
        info: '實景拍攝圖',
        nameColor: '#000'
      },
    ],
  },
]
</script>
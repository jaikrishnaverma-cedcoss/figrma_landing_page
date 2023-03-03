import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <div className="header__wrapper">
            <div className="header__heading">
              <img src="Vector.png" className="header__icon" alt="" />
              <p className="header__headtext">Pages</p>
            </div>
            <p className="header__offer">Book Website Templates</p>
            <p className="header__description">
              Pages is a professional author bookstore Webflow template bundled
              with a bunch of unique layouts. Impressive interface and practical
              sections put all the creative power right in your hands to publish
              your masterpiece.
            </p>
            <div className="previewui_wrapper">
              <img src="image 1000.png" className="image__first" alt="" />
              <img src="image 1003.png" className="image__second" alt="" />
            </div>
          </div>
        </header>
        <main>
          <section className="follow">
            <div className="follow__left">
              <div className="titlecard">
                <div className="title__circle">
                  <img src="Vector (1).png" className="v__icon" alt="" />
                </div>
                <div className="title__details">
                  <p className="title__paraone">VictorFlow</p>
                  <p className="title__paratwo">
                    Webflow Design & <br></br>Development Agency
                  </p>
                </div>
              </div>
              <p className="follow__followus">Follow Us</p>
              {[
                {
                  image: "instagram.png",
                  title: "Instagaram",
                  para: (
                    <>Join our Instagram page, We share UI/UX Design tips.</>
                  ),
                },
                {
                  image: "Vector (2).png",
                  title: "Twitter",
                  para: <>Join our Twitter page, We share UI/UX Design tips.</>,
                },
                {
                  image: "Vector (3).png",
                  title: "LinkdIn",
                  para: (
                    <>Join our Linkedin page, We share UI/UX Design tips.</>
                  ),
                },
              ].map((x) => (
                <div className="titlecard titlecard--social">
                  <div className="title__circle title__circle--social">
                    <img src={x.image} className="v__icon" alt="" />
                  </div>
                  <div className="title__details">
                    <p className="title__paraone title__paraone--social">
                      {x.title}→
                    </p>
                    <p className="title__paratwo title__paratwo--social">
                      {x.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="figma">
              {[
                {
                  image: "figma-1 1.png",
                  title: (
                    <>
                      Figma File for{" "}
                      <span style={{ color: "#4353FF" }}>FREE</span>
                    </>
                  ),
                  para: (
                    <>It is free to use for personal and commercial purposes.</>
                  ),
                },
                {
                  image: "Vector (5).png",
                  title: <>Webflow</>,
                  para: (
                    <>The complete design is available as a Webflow template.</>
                  ),
                },
              ].map((x, i) => (
                <div className="titlecard titlecard--social">
                  <div
                    className={`title__circle title__circle--social title__circle--figma${i}`}
                  >
                    <img src={x.image} className="v__icon" alt="" />
                  </div>
                  <div className="title__details">
                    <p className="title__paraone title__paraone--social">
                      {x.title}→
                    </p>
                    <p className="title__paratwo title__paratwo--social">
                      {x.para}
                    </p>
                  </div>
                </div>
              ))}
              <button className="figma__button">Get Template $79 USD</button>
            </div>
            <div className="follow__right"></div>
          </section>
          <section className="products__list">
            <section className="products">
              <div className="products__left">
                <p className="product__title">Images</p>
                {[
                  {
                    image: "Vector (7).png",
                    title: <>Pexels</>,
                    para: (
                      <>
                        You can check the licenses and download the images for
                        free on Pexels
                      </>
                    ),
                  },
                  {
                    image: "Vector (6).png",
                    title: <>Unsplash</>,
                    para: (
                      <>
                        You can check the licenses and download the images for
                        free on Unsplash
                      </>
                    ),
                  },
                ].map((x, i) => (
                  <>
                    <div className="titlecard titlecard--social mb10">
                      <div
                        className={`title__circle title__circle--social mr0`}
                      >
                        <img src={x.image} className="v__icon" alt="" />
                      </div>
                      <div className="title__details title__details--products">
                        <p className="title__paraone title__paraone--social">
                          {x.title}→
                        </p>
                      </div>
                    </div>
                    <p className="title__paratwo title__paratwo--social mb20">
                      {x.para}
                    </p>
                  </>
                ))}
              </div>
              <div className="products__right">
                <p className="product__title">Fonts</p>
                {[
                  {
                    image: "Vector (8).png",
                    title: <>Cardo</>,
                    para: (
                      <>
                        You can check the licenses and download the images for
                        free on Pexels
                      </>
                    ),
                  },
                  {
                    image: "Vector (8).png",
                    title: <>Inter</>,
                    para: (
                      <>
                        You can check the licenses and download the images for
                        free on Unsplash
                      </>
                    ),
                  },
                ].map((x, i) => (
                  <>
                    <div className="titlecard titlecard--social mb10">
                      <div
                        className={`title__circle title__circle--social mr0`}
                      >
                        <img src={x.image} className="v__icon" alt="" />
                      </div>
                      <div className="title__details title__details--products">
                        <p className="title__paraone title__paraone--social">
                          {x.title}→
                        </p>
                      </div>
                    </div>
                    <p className="title__paratwo title__paratwo--social mb20">
                      {x.para}
                    </p>
                  </>
                ))}
              </div>
            </section>
          </section>
        </main>
      </div>
      <footer>
        <a href="#">
          Proudly Presented by <emp>VictorFlow</emp> in Designed by Figma and
          Build in Webflow{" "}
        </a>
      </footer>
    </>
  );
};

export default Home;
  
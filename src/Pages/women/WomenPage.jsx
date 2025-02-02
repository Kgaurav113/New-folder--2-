
import "./WomenPage.css"
// import "../../components/Navbar/BottomNavbar.css"
import { BottomNavbar } from "../../components/Navbar/BottomNavbar"
import { Women } from "../../components/Navbar/NavData"
import { Link } from "react-router-dom";

export const WomenPage = () => {

  const data = Women;
  return (<>
    <BottomNavbar data={data} />
    <div className="container">
      <div><img style={{width:"100%"}}src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave60/HPSaleBanner/Desktop_Updates/FW21_SALE_ONSITE_BANNER_60__desktop_1_1x_20211215161450.jpg" alt="" /></div>
      <div className="main_img">
        <Link to="/womenproducts">
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/BIG_EN/Big_desktop_1_2x_20220602180836.jpg?imwidth=1180&imdensity=1" alt="women-img" />
        </Link>
      </div>
      <div className="banner">
        <h4 className="ha4">DON'T MISS OUT</h4>
        <h1 className="ha1">New Arrivals</h1>
        <h5 className="ha5">Peter Petrov, Thom Browne, Loewe, Etro...</h5>
        <Link to="/womenproducts"><button className="btn-shop">SHOP NOW</button></Link>
      </div>
      <div className="start">
        <div className="left">
          <h4 className="ha4" >VALENTINO & VALENTINO GARAVANI</h4>
          <h1 className="ha1">It's all in the fine prints</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/ActboxTall_CW23_1_2x-2_20220603110736.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>
        <div className="right">
          <h4 className="ha4">MYTHERESA PRESENT</h4>
          <h1 className="ha1">Luxurious lifestyle updates</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/LIFE_SMALL_WEEK_4_B_2x_20220602181125.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
          <hr></hr>
          <h4 className="ha4">BLUE SKY THINKING</h4>
          <h1 className="ha1">New dresses in fresh colorways</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/ActboxSmall_CW23_1_2x_20220602181123.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>
      </div>
      <hr></hr>
      <div className="second">
        <div className="left">
          <h4 className="ha4">HANDS-FREE</h4>
          <h1 className="ha1">Crossbody bags to take anywhere</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/ActboxSmall_CW23_2_2x_20220602181123.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
          <hr></hr>
          <h4 className="ha4">READY FOR WARM WEATHER?</h4>
          <h1 className="ha1">Sandals and slides to buy <br /> now
          </h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxSmall_2x_4_20220422154022.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>
        <div className="right">
          <h4 className="ha4" >NOW AT MYTHERESA</h4>
          <h1 className="ha1">Get a first look at exclusive beachwear styles</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/ActboxTall_CW23_2x_20220602181138.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>

      </div>
      <div className="third">
        <div>
          <h4 className="ha4" >BY THE SEA</h4>
          <h1 className="ha1">Energetic styles for lazy beach days</h1>
        </div>
        <div className="third-img">
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/Finest_edit_CW23_1_2x_20220602181602.jpg" alt="" />
            <h4 className="ha4">Loewe</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/Finest_edit_CW23_2_2x_20220602181602.jpg" alt="" />
            <h4 className="ha4">Missoni</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/Finest_edit_CW23_3_2x_20220602181603.jpg" alt="" />
            <h4 className="ha4">Aquaezza</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW23/Finest_edit_CW23_4_2x_20220602181602.jpg" alt="" />
            <h4 className="ha4">Gucci</h4>
          </div>

        </div>
        <Link to="/womenproducts">
          <button className="btn-shop last-btn">SHOP NOW</button></Link>
        <hr></hr>
      </div>
      <div className="texts-div">
        {/* <h2>Mytheresa – Men’s luxury and designer fashion</h2>
          <p>Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</p>
          <p>Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Ermenegildo Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</p> */}
        <section class="text_below">
          <h2 className="ha2">MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</h2>
          <p className="p-tag">
            Mytheresa has organized a collection of designer menswear items to
            keep every women looking his best. Each item in our menswear
            assortment has been curated and edited by leading experts in women’s
            fashion. By simply browsing our website, you will discover a
            luxury shopping experience and find all you need to help you
            achieve a distinct, well-refined look. We offer fast, worldwide
            shipping to 130 countries within 72 hours on everything. From the
            most beloved luxury fashion brands for men, to our highly sought
            after exclusive menswear designer collaborations – Mytheresa’s
            tailored edit is suited to stylish men worldwide.
          </p>
          <p className="p-tag">
            Amongst our daily New Arrivals, you will uncover the freshest
            trends straight off the runway. With Mytheresa’s assortment of
            designer clothes you are guaranteed to look distinguished and
            build a sophisticated closet that serves your preferred lifestyle.
            Discover sharp suiting options by Ermenegildo Zegna for work or
            opt for an elevated off-duty item from Polo Ralph Lauren. Put your
            best foot forward in men’s designer shoes from esteemed labels
            like Prada and Saint Laurent. Not forgetting the perfect finishing
            touch with classic accessories for men, such as a luxury watch, a
            classic Burberry scarf or a statement tie. Our buyers have put
            together the finest selection of iconic styles to help maintain
            your reputation as a dashing gentleman. A helping hand, our team
            have carefully selected the perfect designer bags to complete your
            everyday look.
          </p>
          <div class="exp_quality">
            <div class="exp">
              <p className="p-tag">A LUXURY SHOPPING EXPERIENCE</p>
              <ul>
                <li>
                  The finest edit of more than 100 international luxury brands
                </li>
                <li>400 new arrivals each week directly from the runway</li>
                <li>
                  Well-curated selection of items for a boutique-like shopping
                  experience
                </li>
                <li>
                  Exclusive designer collaborations and capsule collections
                  that you <br /> won’t find anywhereelse
                </li>
              </ul>
            </div>
            <div class="quality">
              <p className="p-tag">SERVICE AND QUALITY</p>
              <ul>
                <li>Authentic products guaranteed</li>
                <li>
                  Fast, reliable delivery to over 130 countries within 72
                  hours
                </li>
                <li>Free returns and exchanges within 30 days</li>
                <li>
                  Exceptional customer service available 24 hours a day, 6
                  days a week in 13 different languages
                </li>
              </ul>
            </div>
          </div>
          <p className="p-tag">
            Mytheresa has a long and rich fashion heritage that spans more
            than 30 years. What began in the heart of Munich as a contained
            local boutique offering creations from international designers has
            now grown to become one of the most innovative luxury e-commerce
            companies in the world. Whether you’re paying a visit to our
            Mytheresa Store, browsing from your computer at home, or shopping
            on-the-go via our mobile app, our goal always remains the same: to
            provide the perfect space that caters to all your shopping
            desires.
          </p>
          <p className="p-tag">
            At Mytheresa we know that stylish men love fashion too and as a
            result, our professional Customer Service team is here to help
            with your order and make sure you are always dressed for success.
          </p>
        </section>
      </div>

    </div>
  </>
  )
}
import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-container">

                <div className="hero-content">

                    <span className="hero-tag">
                        Premium Furniture Collection
                    </span>

                    <h1>
                        Transform Your Home Into A Luxury Living Experience
                    </h1>

                    <p>
                        Discover handcrafted furniture designed with elegance,
                        comfort and timeless style for every modern home.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Shop Now
                        </button>

                        <button className="secondary-btn">
                            Explore Collection
                        </button>
                    </div>

                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Luxury Sofa" />
                </div>

            </div>

        </section>
    );
}

export default Hero;
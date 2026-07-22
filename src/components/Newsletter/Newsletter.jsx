import "./Newsletter.css";
import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter-container">

                <span className="newsletter-tag">
                    Join Our Community
                </span>

                <h2>
                    Get Exclusive Furniture Deals & Interior Inspiration
                </h2>

                <p>
                    Subscribe to receive the latest collections, design ideas,
                    exclusive offers, and early access to premium furniture launches.
                </p>

                <form className="newsletter-form">

                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />

                    <button type="submit">
                        Subscribe
                        <FaPaperPlane />
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Newsletter;
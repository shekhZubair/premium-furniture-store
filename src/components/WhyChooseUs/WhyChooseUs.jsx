import "./WhyChooseUs.css";
import { FaTruck, FaAward, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaTruck />,
            title: "Free Delivery",
            description: "Enjoy fast and secure delivery on every premium furniture order.",
        },
        {
            icon: <FaAward />,
            title: "Premium Quality",
            description: "Crafted with durable materials and elegant finishes built to last.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            description: "Our friendly support team is always here to help you.",
        },
    ];

    return (
        <section className="why-section">
            <div className="section-title">
                <p>WHY CHOOSE US</p>
                <h2>Designed Around Your Lifestyle</h2>
            </div>

            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;
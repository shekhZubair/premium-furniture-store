import "./Testimonials.css";

function Testimonials() {

    const reviews = [

        {
            name: "Aman Khan",
            comment:
                "Beautiful furniture with outstanding quality. My living room has completely transformed.",
        },

        {
            name: "Neha Sharma",
            comment:
                "Excellent craftsmanship and smooth delivery. Highly recommended for modern interiors.",
        },

        {
            name: "Rahul Verma",
            comment:
                "Premium experience from browsing to delivery. Absolutely worth every penny.",
        },

    ];

    return (

        <section className="testimonials">

            <div className="section-title">
                <p>TESTIMONIALS</p>
                <h2>What Our Customers Say</h2>
            </div>

            <div className="testimonial-grid">

                {reviews.map((review, index) => (

                    <div
                        className="testimonial-card"
                        key={index}
                    >

                        <p>"{review.comment}"</p>

                        <h4>{review.name}</h4>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Testimonials;
import "./CategoryFilter.css";

const categories = [
    "All",
    "Living Room",
    "Bedroom",
    "Dining",
    "Office",
    "Decor",
];

function CategoryFilter() {
    return (
        <section className="category-filter">
            <h2>Browse By Category</h2>

            <div className="category-buttons">
                {categories.map((category) => (
                    <button key={category}>
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CategoryFilter;
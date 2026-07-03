export default function CategoriesWidget() {
  const categories = [
    { name: "General", count: 25 },
    { name: "Lifestyle", count: 12 },
    { name: "Travel", count: 5 },
    { name: "Design", count: 22 },
    { name: "Creative", count: 8 },
    { name: "Education", count: 14 },
  ];

  return (
    <div className="categories-widget widget-item">
      <h3 className="widget-title">Categories</h3>

      <ul className="mt-3">
        {categories.map((cat, index) => (
          <li key={index}>
            <a href="#">
              {cat.name} <span>({cat.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function TagsWidget() {
  const tags = [
    "App",
    "IT",
    "Business",
    "Mac",
    "Design",
    "Office",
    "Creative",
    "Studio",
    "Smart",
    "Tips",
    "Marketing",
  ];

  return (
    <div className="tags-widget widget-item">
      <h3 className="widget-title">Tags</h3>

      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
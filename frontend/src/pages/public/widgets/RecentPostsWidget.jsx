export default function RecentPostsWidget() {
  const posts = [
    {
      img: "assets/blog/img/blog/blog-post-square-1.webp",
      title: "Nihil blanditiis at in nihil autem",
      date: "Jan 1, 2020",
    },
    {
      img: "assets/blog/img/blog/blog-post-square-2.webp",
      title: "Quidem autem et impedit",
      date: "Jan 1, 2020",
    },
    {
      img: "assets/blog/img/blog/blog-post-square-3.webp",
      title: "Id quia et et ut maxime similique",
      date: "Jan 1, 2020",
    },
    {
      img: "assets/blog/img/blog/blog-post-square-4.webp",
      title: "Laborum corporis quo dara net para",
      date: "Jan 1, 2020",
    },
    {
      img: "assets/blog/img/blog/blog-post-square-5.webp",
      title: "Et dolores corrupti quae illo",
      date: "Jan 1, 2020",
    },
  ];

  return (
    <div className="recent-posts-widget widget-item">
      <h3 className="widget-title">Recent Posts</h3>

      {posts.map((post, index) => (
        <div className="post-item" key={index}>
          <img src={post.img} alt="post" className="flex-shrink-0" />

          <div>
            <h4>
              <a href="/post">{post.title}</a>
            </h4>
            <time>{post.date}</time>
          </div>
        </div>
      ))}
    </div>
  );
}
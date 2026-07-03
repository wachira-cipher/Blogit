import SearchWidget from "../widgets/SearchWidget";
import CategoriesWidget from "../widgets/CategoriesWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import TagsWidget from "../widgets/TagsWidget";

export default function Sidebar() {
  return (
    <div className="col-12 col-lg-4">
      <div className="widgets-container" data-aos="fade-up" data-aos-delay="200">

        <SearchWidget />
        <CategoriesWidget />
        <RecentPostsWidget />
        <TagsWidget />

      </div>
    </div>
  );
}
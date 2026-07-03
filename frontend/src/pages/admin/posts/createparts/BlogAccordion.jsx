import BlogInfoSection from "./BlogInfoSection";
import BlogPricingSection from "./BlogPricingSection";
import BlogMediaSection from "./BlogMediaSection";
import BlogCustomFieldsSection from "./BlogCustomFieldsSection";

export default function BlogAccordion({
  categories,
  tags,
  form,
  setForm
}) {

  return (

    <div
      className="accordions-items-seperate"
      id="accordionSpacingExample"
    >

      {/* INFO SECTION (where tags MUST be handled) */}
      <BlogInfoSection
        categories={categories}
        tags={tags}

        // ✅ IMPORTANT: ensure form.tags is available
        selectedTags={form.tags}

        setForm={setForm}
        form={form}
      />

      <BlogPricingSection
        form={form}
        setForm={setForm}
      />

      <BlogMediaSection
        form={form}
        setForm={setForm}
      />

      <BlogCustomFieldsSection
        form={form}
        setForm={setForm}
      />

    </div>
  );
}
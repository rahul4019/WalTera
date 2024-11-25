import { Button } from "@/components/ui/button";

const categories = [
  "Nature",
  "Abstract",
  "Animals",
  "Architecture",
  "Space",
  "Technology",
  "Minimalist",
  "Artistic",
];

export function Categories() {
  return (
    <section className="py-6 px-4 md:py-12 md:px-6">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Button key={category} variant="outline">
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
}

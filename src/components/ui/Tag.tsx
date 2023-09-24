import Image from "next/image";

export function TagPill({
  tag,
  size = "md",
}: {
  tag: Tag;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <span
      key={tag.name}
      className="inline-flex items-center px-4 py-2 text-white rounded-full cursor-default bg-blue-500/20 hover:bg-blue-500/40 trans"
    >
      <div className="relative mr-1 lg:mr-1.5 -translate-x-0 fcenter">
        <Image
          src={"/icons/" + (tag.iconFileName || tag.slug + ".svg")}
          alt={tag.name}
          width={18 * (tag.iconScale || 1)}
          height={18 * (tag.iconScale || 1)}
        />
      </div>
      <div className="text-sm">{tag.name}</div>
    </span>
  );
}

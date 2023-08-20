type Icon = "external" | "github";

interface Link {
  name: string;
  href: string;
  icon: Icon;
}

interface SanityImage {
  asset: any;
}

interface Tag {
  slug: string;
  name: string;
}

interface Project {
  title: string;
  slug: string;
  websiteUrl?: string;
  githubUrl?: string;
  links: Link[];
  tags: Tag[];
}

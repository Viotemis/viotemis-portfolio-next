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
  iconFileName?: string;
  iconScale?: number;
}

interface Project {
  title: string;
  slug: string;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  dateRange: {
    start: string;
    end?: string;
    ongoing?: boolean;
  };
  tags: Tag[];
}

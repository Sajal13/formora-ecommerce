export interface FileAttachment {
  url: string;
  name: string;
  size: number;
  type: string;
}

export interface ImagePreview {
  id: string;
  file: {
    name: string;
    size: string;
    format: string;
    preview: string | undefined;
  };
}

export interface BreadcrumbNavItem {
  id: number;
  title: string;
  link: string;
  isActive?: boolean;
}

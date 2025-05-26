export interface ProjectData {
  title: string;
  description: string;
  previewUrl: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
  isPlaceholder?: boolean;
}

// Props type for the Project component, extending ProjectData with additional UI props
export interface ProjectProps extends ProjectData {
  isReversed?: boolean;
}

// Type for the projects array
export type ProjectsList = ProjectData[]; 
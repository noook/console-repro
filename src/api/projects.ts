import Project, { ProjectConstructorParams } from '@/models/Project';
import instance from '.';

export async function getProjects(): Promise<Project[]> {
  try {
    const { data } = await instance.get<ProjectConstructorParams[]>('/projects');
    return data.map((item) => new Project(item));
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getProject(id: number): Promise<Project> {
  try {
    const { data } = await instance.get<ProjectConstructorParams>(`/project/${id}`);
    return new Project(data);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

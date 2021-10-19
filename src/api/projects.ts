import Project, { ProjectConstructorParams } from '@/models/Project';
import instance from '.';

export async function getProjects() {
  try {
    const { data } = await instance.get<ProjectConstructorParams[]>('/projects');
    return data.map((item) => new Project(item));
  } catch (e) {
    console.error(e);
    throw e;
  }
}

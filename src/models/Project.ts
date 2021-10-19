interface ProjectEnvironment {
  id: number;
  createdAt: number;
  name: string;
  url: string;
}

interface ProjectType {
  id: number;
  icon: string;
  name: string;
  url: string;
}

export interface ProjectConstructorParams {
  id: number;
  environments: ProjectEnvironment[];
  projectType: ProjectType;
}

export default class Project {
  public id: ProjectConstructorParams['id'];

  public environments: ProjectConstructorParams['environments'];

  public projectType: ProjectConstructorParams['projectType'];

  constructor(params: ProjectConstructorParams) {
    this.id = params.id;
    this.environments = params.environments;
    this.projectType = params.projectType;
  }
}

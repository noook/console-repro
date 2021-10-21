interface ProjectEnvironment {
  id: number;
  createdAt: number;
  name: string;
  url: string;
}

interface ProjectType {
  id: number;
  icon: 'nlu' | 'mail' | 'docuchecker';
  name: string;
  url: string;
}

export interface ProjectConstructorParams {
  id: number;
  name: string;
  lastEnv: number | null;
  environments: ProjectEnvironment[];
  projectType: ProjectType;
}

export default class Project {
  public id: ProjectConstructorParams['id'];

  public name: ProjectConstructorParams['name'];

  public lastEnv: ProjectConstructorParams['lastEnv'];

  public environments: ProjectConstructorParams['environments'];

  public projectType: ProjectConstructorParams['projectType'];

  constructor(params: ProjectConstructorParams) {
    this.id = params.id;
    this.name = params.name;
    this.lastEnv = params.lastEnv;
    this.environments = params.environments;
    this.projectType = params.projectType;
  }
}

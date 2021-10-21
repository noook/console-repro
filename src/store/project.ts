import { defineStore } from 'pinia';
import Project from '@/models/Project';

const useProjectStore = defineStore('project', {
  state: () => ({
    project: null as Project | null,
  }),
  getters: {},
  actions: {
    setProject(project: Project): void {
      this.project = project;
    },
    isCurrentProject(id: number): boolean {
      if (this.project === null) {
        return false;
      }

      if (this.project.id === id) {
        return true;
      }

      return false;
    },
  },
});

export default useProjectStore;

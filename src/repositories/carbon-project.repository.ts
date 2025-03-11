import { CarbonProject } from '../models/carbon-project.model';

export class CarbonProjectRepository {
  /**
   * This is a mock database for the carbon projects, only for demo purposes
   * It is not used in the production environment
   * Everytime the server restarts, the database is reset
   */
  private projects: CarbonProject[] = [];

  async findAll(): Promise<CarbonProject[]> {
    return this.projects;
  }

  async create(project: CarbonProject): Promise<CarbonProject> {
    this.projects.push(project);
    return project;
  }
}

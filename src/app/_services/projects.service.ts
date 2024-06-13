import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "To-Do App", pictures: ["../../assets/To-do/to-do 1.png","../../assets/To-do/To-do-list-icon-1!.jpg"], projectLink: "https://github.com/vukma/To-do-list", summary: "Simple list that can serve as a reminder , or to set a schedule.", description: "Component creation for task and inputs, using 2-way data binding for real-time events.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: "Mapty", pictures: ["../../assets/Mapty/Mapty.png","../../assets/Mapty/bike..jpg","../../assets/Mapty/run.jpg"], projectLink: "https://github.com/vukma/Mapty-app", summary: "App that works as a google map, showcase the routes for training.", description: "App that uses geolocation API which helps to track workouts that have been done.", tags: [Tag.JAVASCRIPT]},
    {id: 2, name: "Pijaca", pictures: ["../../assets/Pijaca/pijaca 1.jpg"], projectLink: "https://github.com/vukma/Pijaca", summary: "Grocery store app for adding or removing groceries", description: "DOM manipulation , strings and numbers.Simply tracks the amount of bought groceries.", tags: [Tag.JAVASCRIPT]},
  ]



  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if (!project) { throw new Error('Project with ID=' + id + ' not found');}
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filterProjects: Project[] = [];
    this.projects.forEach(function (project) {
         let foundAll = true;

         filterTags.forEach(function (filterTag) {
          if (project.tags.includes(filterTag) == false) {
            foundAll = false;
          }
         });

         if (foundAll) {
            filterProjects.push(project);
         }
    });

    return filterProjects;
  }
}

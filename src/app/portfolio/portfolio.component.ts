import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../_models/Project'
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
 
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Miroslav Vukmirov - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  Filter() {
    let filterTags: Tag [] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }



    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.angular = false;
    this.typescript = false;
    this.angular = false;

    this.projects = this.projectService.getProjects();
  }
}

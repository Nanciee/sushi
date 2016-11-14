import {Component, Input} from 'angular2/core';
import {HomeService} from '../home/home.services.js';
import {HoverDirective} from '../../directives/thumbnail-hover.directive.js';

@Component({
  selector: 'project-thumbnail',
  templateUrl: './client/app/components/projectThumbnail/project-thumbnail.html',
  directives: [HoverDirective]
})

export class ProjectThumbnailComponent {
  @Input() projects
}
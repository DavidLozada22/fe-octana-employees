import { Component } from '@angular/core';
import { RouterModel } from "../../constants/route.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public ROUTES = {...RouterModel.ROUTES};
}

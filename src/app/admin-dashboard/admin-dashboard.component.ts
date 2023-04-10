import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';
import { AppLoaderService } from '../apploader/apploader.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent { 
  constructor(private authservice: AuthenticationServiceService,
    private loader:AppLoaderService,
    private router:Router){}
  logOut(){
    this.loader.open("Please wait .... ");
       this.router.navigate(["/"]);
       setTimeout(() => {      
          this.loader.close();
         
        }, 1000);
    this.authservice.logout();
  }
}

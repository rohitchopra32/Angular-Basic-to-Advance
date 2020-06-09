import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    private userSub: Subscription;


    constructor(private dataService: DataStorageService, private authService: AuthService) {

    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user: User) => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    onSaveData() {
        this.dataService.storeRecipe();
    }

    onFetchData() {
        this.dataService.fetchRecipe().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }
}
import { Component, OnInit } from "@angular/core";
import { FeedsService } from "../services/feeds.service"

@Component({
	selector: "feeds",
	moduleId: module.id,
	templateUrl: "./feeds.component.html",
	styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {


	constructor(private feedsService: FeedsService) { }
	anouncements = [];
	isLoading = false;
	listLoaded = false;

	ngOnInit() {
		this.isLoading = true;
		this.feedsService.getAnouncements()
			.subscribe((loadedGroceries: []) => {
				loadedGroceries.forEach((feed) => {
					this.anouncements.unshift(feed);
				});
				this.isLoading = false;
				this.listLoaded = true;
			});
	}

}
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { getString } from "tns-core-modules/http/http";
import { knownFolders } from "tns-core-modules/file-system";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Feeds } from '../data/feeds.model'

@Injectable()
export class FeedsService {
    constructor(private http: HttpClient) { }

    getCommonHeaders() {
        return {
            "Content-Type": "application/json; charset=utf-8",
            "Host": "newsapi.org",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "cache-control": "no-cache",
            'Authorization': 'Bearer e29460165dc5450f857679be473385a1'
        }
    }
    getAnouncements() {

        return this.http.get('https://newsapi.org/v2/top-headlines?country=gr',
            { headers: this.getCommonHeaders() }
        ).pipe(
            map((data: Feeds) => {
                let anouncementsList = [];
                data.articles.forEach((feed) => {
                    anouncementsList.push(feed);
                });
                return anouncementsList;
            }),
            catchError(this.handleErrors)
        );
    }







    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}
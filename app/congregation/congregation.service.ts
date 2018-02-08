import { Injectable } from "@angular/core";
import { Congregation } from "./congregation";

@Injectable()
export class CongregationService {
    private congregations: Array<Congregation>;

    constructor() {
        this.initData();
    }

    // Congregation model
    // _id?: string;
    // name: string;
    // country: string;
    // city: string;
    // address: string;
    // congregation_id: number;

    initData() {
        //TODO all data should be a request for the server
        this.congregations = new Array<Congregation>(
            {
                name: "Los Sauces",
                country: "Bolivia",
                city: "Cochabamba",
                address: "Calle Litoral",
                congregation_id: 0

            },
            {
                name: "Los Piyos",
                country: "Bolivia",
                city: "Santa Cruz",
                address: "Calle Alguna",
                congregation_id: 1
            }
        );
    }

    getCongregations(): Congregation[] {
        return this.congregations;
    }

    getCongregation(id: number): Congregation {
        return this.congregations.filter(congregation => congregation.congregation_id === id)[0];
    }

}

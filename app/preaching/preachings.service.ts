import { Injectable } from "@angular/core";
import { Preaching } from "./preaching";

@Injectable()
export class PreachingsService {
    private preachingsDays: Array<any>;
    private preachings: Array<Preaching>;

    constructor() {
        this.initData();
    }

    // id: number;
    // dayOfWeek: string;
    // numberDay: string;
    // preachingLead: string;
    // place: string;
    // territory: string;
    // time: string;

    initData() {
        //TODO all data should be a request for the server
        this.preachingsDays = new Array<any>(
            {
                id: 1,
                word: 'J',
                dayOfWeek: 'Jueves',
                day: "4",
                month: "Enero",
                year: '2018',
                moment: 'Manana',
                preachingLead: 'Gaston de la Fuente',
                place: "Casa Birbueth",
                territory: "30-31",
                time: "08:30",
                color: "#e08011"
            },
            {
                id: 2,
                word: 'J',
                dayOfWeek: 'Jueves',
                day: "4",
                month: "Enero",
                year: '2018',
                moment: 'Noche',
                preachingLead: 'Ronald Chambi',
                place: "Peru Tadeo Haenke",
                territory: "Calles",
                time: "19:00",
                color: "#e08011"
            },
            {
                id: 3,
                word: 'V',
                dayOfWeek: 'Viernes',
                day: "5",
                month: "Enero",
                year: "2018",
                moment: 'Tarde',
                preachingLead: 'Alberto Pena',
                place: "Casa Birbueth",
                territory: "29",
                time: "16:45",
                color: "#df4ab2"
            },
            {
                id: 4,
                word: 'S',
                dayOfWeek: 'Sabado',
                day: "6",
                month: "Enero",
                year: '2018',
                moment: 'Manana',
                preachingLead: 'Carlos Foronda',
                place: "Casa Orellana",
                territory: "5-4",
                time: "08:30",
                color: "#10a4c9"
            },
            {
                id: 5,
                word: 'D',
                dayOfWeek: 'Domingo',
                day: "7",
                month: "Enero",
                year: '2018',
                moment: 'Manana',
                preachingLead: 'Ninguno',
                place: "Parque Orellana",
                territory: "Aramasi",
                time: "07:00",
                color: "#93e04b"
            },
            {
                id: 6,
                word: 'D',
                dayOfWeek: 'Domingo',
                day: "7",
                month: "Enero",
                year: '2018',
                moment: 'Manana',                
                preachingLead: 'Alberto Pena',
                place: "Casa Garcia",
                territory: "6,7 (GR. 1,4)",
                time: "09:15",
                color: "#93e04b"
            },
            {
                id: 7,
                word: 'D',
                dayOfWeek: 'Domingo',
                day: "7",
                month: "Enero",
                year: '2018',
                moment: 'Manana',                
                preachingLead: 'Gaston de la Fuente',
                place: "Casa Torrico",
                territory: "27-28 (GRS. 1,4)",
                time: "09:15",
                color: "#93e04b"
            },
            {
                id: 8,
                word: 'L',
                dayOfWeek: 'Lunes',
                day: "8",
                month: "Enero",
                year: '2018',
                moment: 'Noche',                
                preachingLead: 'Victor Rivera',
                place: "Heroinas Ayacucho",
                territory: "Calles",
                time: "19:00",
                color: "#e08011"
            },
            {
                id: 9,
                word: 'MA',
                dayOfWeek: 'Martes',
                day: "9",
                month: "Enero",
                year: '2018',
                moment: 'Tarde',
                preachingLead: 'Ariel Araos',
                place: "Casa Pena",
                territory: "13, 14, 12",
                time: "16:45",
                color: "#e08011"
            },
            {
                id: 10,
                word: 'MI',
                dayOfWeek: 'Miercoles',
                day: "10",
                month: "Enero",
                year: '2018',
                moment: 'Manana',                
                preachingLead: 'Alberto Pena',
                place: "Casa De la Fuente",
                territory: "3",
                time: "08:30",
                color: "#e08011"
            }
        );

        this.preachings = new Array<Preaching>(
            // TODO: this implementation should be a promise to get data from the server.
            {
                id: 1,
                weekName: "Del 4 al 10 de Enero de 2018",
                icon: '',
                preachingsDays: this.preachingsDays,
                version: 1
            },
        );
    }

    getPreachings(): Preaching[] {
        return this.preachings;
    }

    getPreaching(id: number): Preaching {
        return this.preachings.filter(preaching => preaching.id === id)[0];
    }

    getPreachingDay(id: number): Object {
        return this.preachings[0].preachingsDays.filter(preachingDay => preachingDay.id === id)[0];
    }
}

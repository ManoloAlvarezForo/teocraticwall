import { Injectable } from "@angular/core";
import { Option } from "./option";

@Injectable()
export class OptionService {
    private options = new Array<Option>(
        { name: "Salidas a la predicacion", word: "PR", color: "#e08011", route: "/preachings" },
        { name: "Vida y ministerio asignaciones", word: "VM", color: "#df4ab2", route: "/preachings" },
        { name: "Acomodadores asignaciones", word: "AC", color: "#10a4c9", route: "/preachings" },
        { name: "Microfonos asignaciones", word: "MI", color: "#93e04b", route: "/preachings" },
    );

    getOptions(): Option[] {
        return this.options;
    }
}

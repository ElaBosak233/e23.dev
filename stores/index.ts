import { defineStore } from "pinia";
import config from "@/e23.config";

interface IndexState {
    title: String;
}

export const useIndexState = defineStore("index_state", {
    state: (): IndexState => ({
        title: "埃拉"
    }),
    actions: {
    }
});
export class Todo {
    done: boolean;
    created: string;

    constructor(public task: string) {
        this.task = task;
        this.done = false;
        this.created = new Date().toLocaleDateString();
    }
}
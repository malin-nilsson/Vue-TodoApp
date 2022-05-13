export class Todo {
    done: boolean;
    id: number;

    constructor(public task: string) {
        this.task = task;
        this.done = false;
        this.id = Date.now()
    }
}


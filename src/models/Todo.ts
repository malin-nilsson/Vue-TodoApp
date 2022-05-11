let counter = 0;

export class Todo {
    done: boolean;
    created: string;
    id: number;

    constructor(public task: string) {
        this.task = task;
        this.done = false;
        this.created = new Date().toLocaleDateString();
        this.id = counter++;
    }
}


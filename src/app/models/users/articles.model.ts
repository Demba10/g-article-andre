export class Articles {

    constructor(
        public id: number,
        public data: string,
        public title: string,
        public content: string,
        public created_date: string,
        public state: number,
        public id_user: number
    ) {}
}
export class Users {
    constructor(
        public id: number,
        public prenom: string,
        public nom: string,
        public mail: string,
        public password: string,
        public auth?: boolean
    ) {}
}
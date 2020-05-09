export class Documents {
    constructor( public documentId: number,
        public name: string,
        public description: string,
        public url: string,
        public children: any
    ) {}

}
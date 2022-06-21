export enum QueryType {
    TYPE_INSERT     = 0,
    TYPE_UPDATE     = 1,
    TYPE_DELETE     = 2,
    TYPE_SELECT     = 3,
    TYPE_ERROR      = -1
}

export class Query {
    public query: string;
    public queryType!: number;

    constructor(query: string) {
        this.query = query;
        this.getType();
    }

    private getType = () => {
        if(this.query.startsWith('SELECT')) {
            this.queryType = QueryType.TYPE_SELECT;
        }
        else if(this.query.startsWith('INSERT')) {
            this.queryType = this.queryType = QueryType.TYPE_INSERT;
        }
        else if(this.query.startsWith('DELETE')) {
            this.queryType = this.queryType = QueryType.TYPE_DELETE;
        }
        else if(this.query.startsWith('UPDATE')) {
            this.queryType = this.queryType = QueryType.TYPE_UPDATE;
        }
    }
}
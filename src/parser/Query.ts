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
        if(this.query.startsWith('get from').toString().toLocaleLowerCase()) {
            this.queryType = QueryType.TYPE_SELECT;
        }
        else if(this.query.startsWith('create into').toString().toLocaleLowerCase()) {
            this.queryType = QueryType.TYPE_INSERT;
        }
        else if(this.query.startsWith('delete from').toString().toLocaleLowerCase()) {
            this.queryType = QueryType.TYPE_DELETE;
        }
        else if(this.query.startsWith('update').toString().toLocaleLowerCase()) {
            this.queryType = QueryType.TYPE_UPDATE;
        }
        else {
            this.queryType = QueryType.TYPE_ERROR;
        }
    }
}
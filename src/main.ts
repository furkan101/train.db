import { Query } from './parser/Query';

const query = new Query("SELECT * FROM bla bla");
console.log(query.query);
console.log(query.queryType);
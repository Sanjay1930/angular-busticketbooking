
import { v4 as uuidv4 } from 'uuid'

export class ticket{

    user_id : string = uuidv4();
    tcid : string = uuidv4();
    name : string = "guest";
    age : number = 0;
    source : string = "";
    destination : string = "";
    amount : number = 0;
    
}
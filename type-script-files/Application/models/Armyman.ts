import { HttpSystem, AppDatabase } from "../helpers";


var Address= {
    city:"",
    street:"",
};
var bodyArmyman={
    name: "",
    year: 0,
    major: "",
    gpa: 0,
    address:"",
};
// export { IArmyman };



class Armyman extends AppDatabase {

    constructor(httpSystem: HttpSystem) {
        super("armyman", httpSystem);
        //this.collectionName = "armyman";  
        //const sss:IArmyman={...I};
    }
}

export { bodyArmyman, Armyman }
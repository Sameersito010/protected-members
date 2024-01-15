let cl=console.log;

class Department{
 employees:Array<string>=[];
    constructor(public dName:string, private readonly dId:string){

    }
    public describe(){
        cl(`this is department ${this.dName} & this is Dept id ${this.dId}`)
    }
    hireEmp(emp:string):void{
        this.employees.push(emp)
    }
    static createEmp(emp:string){
        return{
            empName:emp
        }
    }
}


let d=new Department("Test","D-789")
cl(d.employees)


class financeDepartment extends Department{
   private reportsArr:Array<string>=["OctPayslip","NovPayslip","DecPayslip"]
    private lastReport!:string;
    constructor(dName:string,dId:string){
        super(dName,dId)
    }
    addReports(reports:string){

    }
    hireEmp(emp:string):void{
        if(emp==="sameer"){
            return;
        }else{
            this.employees.push(emp)
        }
    }
}













import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmp'
})

export class SearchEmpPipe implements PipeTransform {

  transform(value:any,args: string): any {
    if (!value) {
      return [];
    }
    if (!args) {
      return value;
    }
    console.log("value",args,typeof(args));
    args = args.toLowerCase();





    
    let filteredItems =  value.filter((item:any) => {
      console.log(value)
      return (item.EmployeeName).toLowerCase() == args || item.BadgeNumber == args || item.ContractName == args || item.ContractNumber
      // return item.id == value
   
    //  if(value){
      
      // return JSON.stringify(item.id).includes(args);
      // || item.ContractName == args || item.ContractNumber
    //  }
    //  else{
    //    console.log("No data found")
    //    return "no data found"
    //  }
      
    })
    if (filteredItems.length === 0) {
      console.log("No data found");
      return [{ message: 'No data found' }];
    }

    return filteredItems;
  }

}

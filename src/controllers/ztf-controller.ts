import { Request, Response } from 'express';
import { ObjRepo } from '../repositories/_obj-repository';
import { ZtfRepo } from '../repositories/ztf-repository';

export let getAllZTFs = async (req: Request, res: Response) => {
    let ztfRepo: ZtfRepo = new ZtfRepo();

    console.log('Querying ZTF...');

    // res.send('Received Get Employee Request..');
    ztfRepo.getAllObjects().then((result: any) => {
        console.log('Result : ' + result);
        res.send(result);
    });
};

// export let saveEmployee = async (req: Request, res: Response) => {
//     let empRepo: EmployeeRepo = new EmployeeRepo();

//     console.log('Received SaveEmployee ==> POST');
//     console.log(req.body);

//     let emp: EmployeeEntity = new EmployeeEntity();
//     emp.email = req.body.email;
//     emp.firstName = req.body.firstName;
//     emp.lastName = req.body.lastName;

//     empRepo.saveEmployee(emp).then((result: any) => {
//         console.log('Result : ' + result);
//         res.send(result);
//     });
// };

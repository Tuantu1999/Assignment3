import React, { useState } from 'react'
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Footer from './FooterComponent';
import Department from './DepartmentComponent';
import { Switch, Route } from 'react-router-dom'
import { STAFFS, DEPARTMENTS } from '../Shared/staffs'
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';
import Contact from './ContactComponent';

function Main() {
    const [nhanvien, setNhanvien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail
                staffById={
                    nhanvien.staffs.filter(
                        (item) => item.id === parseInt(match.params.nhanvienId, 10))[0]
                }
                departmentById={
                    nhanvien.staffs.filter(
                        (item) => item.id === parseInt(match.params.departmentId, 10))[0]
                }
            />
        );
    };

    const addStaff = (staff) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const newStaff = { id, ...staff };
        setNhanvien({
            staffs: [...nhanvien.staffs, newStaff]
        });
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path="/staff"
                    component={() => <StaffList onAdd={addStaff} staffs={nhanvien.staffs} />}
                />

                <Route
                    exact
                    path="/Contactus"
                    component={Contact}
                />

                <Route path="/staff/:nhanvienId" component={StaffWithId} />

                <Route path="/department"
                    component={() => <Department dept={nhanvien.departments} />}
                />

                <Route path="/department/:departmentId" component={StaffWithId} />

                <Route path="/salary"
                    component={() => <Salary salar={nhanvien.staffs} />}
                />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;
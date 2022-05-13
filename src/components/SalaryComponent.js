import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from "react-router-dom"


const salaryBase = 3000000;
const salaryHour = 200000 / 8;

function RenderSalary ({salary}) {
    return(
        <Card>
            <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
            <CardBody>
                <CardText>Mã nhân viên: {salary.id}</CardText>
                <CardText>Hệ số lương: {salary.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
                <CardText className="bg-light p-2 shadow">
                    Lương: {" "}
                    {(salary.salaryScale * salaryBase + salary.overTime * salaryHour).toFixed(0)}
                </CardText>
            </CardBody>
        </Card>
    )
}

const Salary = (props) => {
    const [sortSalary, setSortSalary] = useState()

    const salary = props.salar
    .sort((a,b) => 
        sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale)
    .map((sa) => {
        return (
            <div 
                key={sa.id}
                className="col-12 col-md-6 col-lg-4 mt-2 mb-2"
            >
                <RenderSalary 
                    salary={sa}
                />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link 
                            to="/staff" 
                            className="text-decoration-none"
                        >
                            Nhân viên
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <button
                className="btn btn-primary"
                onClick={() => setSortSalary(!sortSalary)}
            >
                Sắp xếp theo hệ số lương
            </button>
            <div className="row shadow mb-3 mt-3">
                {salary}
            </div>
        </div>
    )
}

export default Salary;
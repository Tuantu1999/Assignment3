import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function StaffDetail(props) {
    if (props.staffById != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/staff">Nhân viên</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem active>
                            {props.staffById.name}
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{props.staffById.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row mb-3">
                    <RenderStaff staff={props.staffById} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}


function RenderStaff({ staff }) {
    if (staff != null) {
        return (
            <div className="card mb-3 container-fluid">
                <div className="row g-0 mb-2 mt-2">
                    <div className="col-12 col-md-4 col-lg-3 text-center">
                        <img
                            src={staff.image}
                            width = "200" height= "250"
                            alt={staff.name}
                        />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="card-body">
                            <h5 className="card-title">
                                Họ và tên: {staff.name}
                            </h5>
                            <hr />
                            <p className="card-text">
                                Ngày sinh:
                                {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </p>
                            <p className="card-text">
                                Ngày vào công ty:
                                {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </p>
                            <p className="card-text">
                                Phòng ban:
                                {staff.department.name || staff.department}
                            </p>
                            <p className="card-text">
                                Số ngày nghỉ còn lại:
                                {staff.annualLeave}
                            </p>
                            <p className="card-text">
                                Số ngày đã làm thêm:
                                {staff.overTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );

    } else {
        return <div></div>;
    }
}


export default StaffDetail;
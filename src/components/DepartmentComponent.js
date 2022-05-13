import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

function RenderDept (props) {
    return(
        <Card>
            <CardTitle className="m-2">
                {props.dept.name}
            </CardTitle>

            <CardBody>
                <CardText>
                    Số lượng nhân viên: {props.dept.numberOfStaff}
                </CardText>
            </CardBody>
        </Card>
    );
}

function Department(props) {
    const departments = props.dept.map((department) => {
        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
                <RenderDept dept={department}/>
            </div>
        )
    });

    return(
        <div className="container">
            <div className="row shadow m-3">{departments}</div>
        </div>
    )
};

export default Department;
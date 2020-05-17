import React, { Component } from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { baseUrl } from '../shared/baseUrl';



class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb className="frame">
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card key={this.props.dish.dishes_id} className="frame">
                                <CardImg width="100%" src={baseUrl + this.props.dish.image} alt={this.props.dish.name} />
                            </Card>
                        </div>
                        <div className="col-12 col-md-6">
                            <h2 className="colortext">{this.props.dish.name}</h2>
                            <h4>{this.props.dish.description}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default DishDetail;
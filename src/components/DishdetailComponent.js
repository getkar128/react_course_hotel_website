import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            )
        }
    }


    function RenderComments({dish}) {
        if (dish != null && dish.comments != null) {
            const comments = dish.comments.map((comment)=>{
                return (
                <div key={comment.id} className='m-1'>
                    <li className="m-2">{comment.comment}</li>
                    <li className="m-2">-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </div>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>

                </div>
            )
            
        } else {
            return (
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
        )
    }
       

    


export default DishDetail
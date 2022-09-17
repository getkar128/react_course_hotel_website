import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { format } from 'date-fns'
class DishDetail extends Component {

    constructor(props) {
        super(props);
        
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
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


    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment)=>{
                // const date = format(comment.date.slice(0, 10),'MMMM dd, yyyy')
                const date = comment.date.slice(0, 10).split('-')
                console.log(date);
                const newDate = format(new Date(date[0], date[1]-1, date[2]), 'MMM dd, yyyy')
                console.log(newDate);
                return (
                <div key={comment.id} className='m-1'>
                    <li className="m-2">{comment.comment}</li>
                    <li className="m-2">-- {comment.author}, {newDate}</li>
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
    render() {
        
        return (
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
            
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        )
       

    }
}

export default DishDetail
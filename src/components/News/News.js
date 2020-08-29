import React from 'react';
import {Button, Card} from 'react-bootstrap';

const News = (props) => {
    const {title, description, source, urlToImage} = props.article;
    return (
        <div>
            <Card className='my-5'>
                <Card.Header as="h2">{source.name}</Card.Header>
                <Card.Body className='row'>
                    <div className="col-md-3">
                        <img className='img-fluid rounded img-thumbnail' src={urlToImage} alt="Not Found"/>
                    </div>
                    <div className="col-md-9">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button variant="dark">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;
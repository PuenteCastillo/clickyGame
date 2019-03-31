
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar, Modal, Footer, Body, Title } from 'react-bootstrap';

// By extending the React.Component class, Counter inherits functionality from it
function MyPromp(props) {


    return (
        <div>
            <Modal show={props.show} onHide={props.smClose} >
                <Modal.Header closeButton>
                    <Modal.Title>You Loose!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Score : {props.score}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.smClose}>
                        Play Again!
            </Button>
                    <Link to="/" >    <Button variant="primary" >
                        Go Home!
            </Button></Link>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default MyPromp;
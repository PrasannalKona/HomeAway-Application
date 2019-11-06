import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const DetailsComponent = (props) => {
    const url = `../Images/Image${props.children[6]}.jpeg`;
    console.log("URL", url);
    return (
        <div class="row details-row3">
            <div class="col-sm-3 details-col1">
                <Link to={{ pathname: '/DetailsMainView', state: { id: `${props.children[6]}`} }}>
                    <img height="250" width="305" src={require(`./Image${props.children[6]}.jpg`)}/>
                </Link>
            </div>
            <div class="col-sm-5 details-col2">
                <Link to={{ pathname: '/DetailsMainView', state: { id: `${props.children[6]}`} }}>{props.children[0]}</Link>
                <span class="details-style1"><h1>{props.children[1]} * {props.children[2]}BR * {props.children[3]}BA * {props.children[4]}Guests</h1></span>
                <div class="details-innerrow3">
                    <div class="details-add-left">
                        <span>$ {props.children[5]} avg/night</span>
                    </div>
                    <div class="details-add-right">                            
                        <span><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/><span class="glyphicon glyphicon-star"/>(5)</span>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default DetailsComponent;
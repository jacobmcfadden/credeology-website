import React from 'react';
import CSSIcon from '../../../assets/Technologies/CSSIcon';
import ExpressIcon from '../../../assets/Technologies/ExpressIcon';
import GitHubIcon from '../../../assets/Technologies/GitHubIcon';
import HerokuIcon from '../../../assets/Technologies/HerokuIcon';
import HTMLIcon from '../../../assets/Technologies/HTMLIcon';
import JavascriptIcon from '../../../assets/Technologies/JavascriptIcon';
import NodeJSIcon from '../../../assets/Technologies/NodeJSIcon';
import NPMIcon from '../../../assets/Technologies/NPMIcon';
import PostgreSQLIcon from '../../../assets/Technologies/PostgreSQLIcon';
import ReactJSIcon from '../../../assets/Technologies/ReactJSIcon';
import ReduxIcon from '../../../assets/Technologies/ReduxIcon';
import SassIcon from '../../../assets/Technologies/SassIcon';

const TechnologiesUsed = (props) => {
    return (
        <div className="container">
            <div className="container__col-24">
                <div className="cardList">
                    <div className="sectionTitleContainer">
                        <h1 className="sectionTitle Subtitle-white align-text">Technologies Used</h1>
                    </div>
                    <div className="cardContainer">
                        <CSSIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <ExpressIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <GitHubIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <HerokuIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <HTMLIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <JavascriptIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <NodeJSIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <NPMIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <PostgreSQLIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <ReactJSIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <ReduxIcon className="cardIcon"/>
                    </div>
                    <div className="cardContainer">
                        <SassIcon className="cardIcon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnologiesUsed;
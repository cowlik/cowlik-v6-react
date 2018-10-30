import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';
import data from '../data/work.json';

class Nav extends Component {
    render() {
        return (
            <nav id="nav">
                <div id="nav-contact" className="container">
                    <a href="https://www.linkedin.com/in/clintharrison/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a href="https://github.com/cowlik" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={['fab', 'github-square']} />
                    </a>
                    <a href="mailto:clint@cowlik.com">
                        <FontAwesomeIcon icon="envelope-square" />
                    </a>
                    <p className="dash">&mdash;</p>
                </div>
                <h2 className="container">Latest Work:</h2>
                <ul>
                    {data.map((item, i) => (
                        <li className={item.slug} key={i}>
                            <Link to={"work/" + item.slug} className="container">{item.client}
                                <span>{item.title}
                                    <FontAwesomeIcon icon="caret-right" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };
};

export default Nav;
import React from 'react';
import mainLogo from '../assets/KafKareTsmall.png';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function TopicDrill() {
  return (
    <div className="body">
      <div className="logo-container">
        <img src={mainLogo} width="168" height="65" />
      </div>
      <div className="header-container">
        <h1>Messages Per Topic</h1>
        <span>
          <Link to="/">
            <button>Main Dashboard</button>
          </Link>
        </span>
      </div>
      <div className="drillTopics component grid-item iframe">
        <iframe
          src="http://localhost:3000/d-solo/2LyxeP1Mk/kafka?orgId=1&refresh=5s&panelId=16"
          width="900"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
      <div className="partitionReplicas component grid-item iframe">
        <iframe
          src="http://localhost:3000/d-solo/2LyxeP1Mk/kafka?orgId=1&refresh=5s&panelId=12"
          width="900"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default withRouter(TopicDrill);
// export default TopicDrill;

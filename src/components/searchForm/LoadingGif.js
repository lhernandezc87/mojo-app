import React from 'react';
import PropTypes from 'prop-types';
import loadingLogo from '../../images/loading-gif.gif';

export default class LoadingGif extends React.Component {

  render(){
  	const cssLoadingLogo = this.props.loadingTickets ? 'loadingLogo' : 'nonVisibleLogo';
    return(
      <div className={cssLoadingLogo}>
        <img src={loadingLogo} alt="loading..." />
      </div>
    )
  }
}

LoadingGif.propTypes = {
  loadingTickets: PropTypes.bool
}
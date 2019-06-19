import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ErrorTost from '../../components/ErrorToast';
import { actions as appActions, getError } from '../../redux/modules/app';

class App extends Component {
    render() {
        const { error, appActions: { clearError } } = this.props;
        return (
            <div>
                {error ? <ErrorTost msg={error} clearError={clearError} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        error: getError(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
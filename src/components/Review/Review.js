import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    completed = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        return feedback.feeling && feedback.understanding && feedback.support && feedback.comment;
    }

    render() {
        return (
            <div>
            <h2>Review Your Feedback</h2>
            <ul>
                <li>Feeling: {this.props.reduxState.feedbackReducer.feeling}</li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                <li>Comment: {this.props.reduxState.feedbackReducer.comment}</li>
            </ul>
            {this.completed()?
                <button>Submit</button>
            :
                <button>Incomplete</button>
            }
        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Understanding);

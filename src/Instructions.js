import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestInProgress: false,
      requestFulfilled: false,
      requestFailed: false,
      apiKey: '',
      secretApiKey: ''
    };
  }

  start() {
    this.setState({ requestInProgress: true, requestFulfilled: false, requestFailed: false });
    axios.get('https://lie-to-me-data-gathering-back.herokuapp.com/opentok_credentials')
      .then(response => {
        this.setState({
          requestInProgress: false,
          requestFulfilled: true,
          requestFailed: false,
          apiKey: response.data.api_key,
          secretApiKey: response.data.api_secret
        })
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          requestInProgress: false,
          requestFulfilled: true,
          requestFailed: true
        })
      })
  }

  render() {
    const { sessionId, token, isInterviewer } = this.props;
    const { apiKey } = this.state;
    const location = {
      pathname: `/session/${this.props.sessionId}/${this.props.isInterviewer ? 'interviewer' : 'interviewee'}`,
      state: { token: token, apiKey: apiKey }
    };
    if (this.state.requestFulfilled && !this.state.requestFailed) {
      return <Redirect push to={ location } />;
    }
    return (
      <div>
        <h1>Instrucciones</h1>
        <p>Sos el {isInterviewer ? "entrevistador" : "entrevistado"}.</p>
        <p>
          {isInterviewer &&
            "Tendrás que hacerle preguntas a la otra persona ..."
          }

          {!isInterviewer &&
            "Verás una imagen y luego el entrevistador te hará preguntas sobre ella ..."
          }
        </p>
        <button className="button" onClick={() => this.start()}>
          ¿Estás listo?
        </button>
        <br/>
        { this.state.requestInProgress &&
          <ReactLoading className="loader" type="spinningBubbles" color="#000000" />
        }
        { this.state.requestFailed &&
          <strong>Hubo un error, por favor volvé a intentar.</strong>
        }
      </div>
    )
  }
}

export default Instructions;

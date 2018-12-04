import React from 'react';
import { Link } from 'react-router-dom';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

  start() {

  }

  render() {
    const { sessionId, apiKey, token, isInterviewer } = this.props;
    const location = {
      pathname: `/session/${this.props.sessionId}/${this.props.isInterviewer ? 'interviewer' : 'interviewee'}`,
      state: { token: this.props.token, apiKey: this.props.apiKey }
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
        <Link to={ location }>
          <button className="button" onClick={() => this.start()}>
            ¿Estás listo?
          </button>
        </Link>
      </div>
    )
  }
}

export default Instructions;

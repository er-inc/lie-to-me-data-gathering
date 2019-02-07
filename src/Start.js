import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      conditionsAccepted: false,
      sessionCode: '',
      email: '',
      requestInProgress: false,
      requestFulfilled: false,
      requestFailed: false,
      sessionId: null,
      token: null,
      apiKey: null,
      isInterviewer: null,
      shouldLie: null
    }
  }

  updateSessionInputValue(session) {
    if (!this.state.requestInProgress) {
      this.setState({
        sessionCode: session
      });
    }
  }

  updateEmailInputValue(email) {
    if (!this.state.requestInProgress) {
      this.setState({
        email: email
      });
    }
  }

  acceptExperiment() {
    this.setState({
      conditionsAccepted: true
    });
  }

  makeStartRequests() {
    this.setState({ requestInProgress: true, requestFulfilled: false, requestFailed: false });
    axios.post('https://lie-to-me-data-gathering-back.herokuapp.com/study_sessions/connect', {
        friendly_id: this.state.sessionCode,
        email: this.state.email
      })
      .then(response => {
        var isInterviewer = this.state.email === response.data.interviewer;
        var isInterviewed = this.state.email === response.data.interviewed;
        if (!(isInterviewer || isInterviewed)) {
          console.log("The person is neither interviewer nor interviewed");
          this.setState({
              requestInProgress: false,
              requestFulfilled: true,
              requestFailed: true,
          })
        } else {
          this.setState({
            requestInProgress: false,
            requestFulfilled: true,
            requestFailed: false,
            sessionId: response.data.otk_session_id,
            isInterviewer: isInterviewer,
            token: isInterviewer ? response.data.otk_token_interviewer : response.data.otk_token_interviewed,
            shouldLie: response.data.lies
        })
      }
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
            requestInProgress: false,
            requestFulfilled: true,
            requestFailed: true,
        });
      });
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionCode}/${this.state.isInterviewer ? 'interviewer' : 'interviewee'}/instructions`,
      state: { token: this.state.token, apiKey: this.state.apiKey, sessionId: this.state.sessionId }
    };
    if (this.state.requestFulfilled && !this.state.requestFailed) {
      return <Redirect push to={ location } />;
    }
    return (
      <div>
        <h1>Te recordamos las condiciones de este experimento</h1>
        <p>
        En este experimento se van a grabar imágenes y audio de usted durante toda la duración de la sesión.
        Estas imágenes y audios serán utilizados ....
        vu;verbvjb
        fbvj;verbvjbbevbui;
        </p>
        <br/>
        { !this.state.conditionsAccepted && (
          <div>
            <p>
            Al hacer click en el siguiente botón está aceptando estas condiciones.
            </p>
            <button className="button" onClick={() => this.acceptExperiment()}>
            Empezar
            </button>
          </div>
        )}
        { this.state.conditionsAccepted && (
          <div className="component-wrapper">
            <h2>¡Gracias por participar!</h2>
            <p>Ingresá el código que te enviamos para esta sesión y tu email:</p>
            <input type="text"
                value={this.state.sessionCode}
                placeholder={"Código de Sesión"}
                onChange={evt => this.updateSessionInputValue(evt.target.value)}
                disabled={this.state.requestInProgress}
                width={100} />
            <input type="text"
                value={this.state.email}
                placeholder={"Email"}
                onChange={evt => this.updateEmailInputValue(evt.target.value)}
                disabled={this.state.requestInProgress}
                width={200} />
            <button className="button"
                disabled = {!this.state.email || !this.state.sessionCode}
                onClick={() => this.makeStartRequests()}>
            Ir
            </button>
          </div>
        )}
        <br/>
        { this.state.requestInProgress &&
          <ReactLoading className="loader" type="spinningBubbles" color="#000000" />
        }
        { this.state.requestFailed &&
          <strong>Esas credenciales no parecen estar bien, por favor chequealas y volvé a intentar.</strong>
        }
      </div>
    )
  }
}

export default Start;

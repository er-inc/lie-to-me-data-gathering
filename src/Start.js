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
      sessionId: null,
      token: null,
      apiKey: null,
      isInterviewer: null
    }
  }

  updateSessionInputValue(session) {
    this.setState({
      sessionCode: session
    });
  }

  updateEmailInputValue(email) {
    this.setState({
      email: email
    });
  }

  acceptExperiment() {
    this.setState({
      conditionsAccepted: true
    })
  }

  makeStartRequests() {
    this.setState({ requestInProgress: true })
      //TODO: Replace with correct URL
    axios.get('https://api.github.com/users/danielaRiesgo')
      .then(response => this.setState({
          requestInProgress: false,
          requestFulfilled: true,
          //username: response.data.name,
          sessionId: '2_MX40NjE3ODUwMn5-MTU0Mzk2Nzk4MzMxNH5UVTduRWJkem14U2lrREt6aTVvWXJyQW1-fg',
          apiKey: '46178502',
          token: 'T1==cGFydG5lcl9pZD00NjE3ODUwMiZzaWc9ZmFiMTg3MjI2YmYyOGU1OGE0MGI1MmUyMWIwMWM4YWE0MGUxNTBmYjpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5qRTNPRFV3TW41LU1UVTBNemsyTnprNE16TXhOSDVVVlRkdVJXSmtlbTE0VTJsclJFdDZhVFZ2V1hKeVFXMS1mZyZjcmVhdGVfdGltZT0xNTQzOTY3OTk0Jm5vbmNlPTAuODg5NTQ4ODI4NTI1ODUwOA==',
          isInterviewer: true
      }))
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionCode}/${this.state.isInterviewer ? 'interviewer' : 'interviewee'}/instructions`,
      state: { token: this.state.token, apiKey: this.state.apiKey, sessionId: this.state.sessionId }
    }
    if (this.state.requestFulfilled) {
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
      </div>
    )
  }
}

export default Start;

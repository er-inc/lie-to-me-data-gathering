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
      apiKey: null
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

  startExperiment() {
    this.setState({
      conditionsAccepted: true
    })
  }

  makeStartRequests() {
    this.setState({requestInProgress: true})
      //TODO: Replace with correct URL
    axios.get('https://api.github.com/users/danielaRiesgo')
      .then(response => this.setState({
          //username: response.data.name,
          requestInProgress: false,
          requestFulfilled: true,
          sessionId: '2_MX40NjE3ODUwMn5-MTU0Mzk1MjA4MjQ0Mn5Gb2xwYSt1L3NvOUNkUHZ0UDhYanE5cmZ-fg',
          apiKey: '46178502',
          token: 'T1==cGFydG5lcl9pZD00NjE3ODUwMiZzaWc9MzFlMDlkYWNiNDljZWFiMTE4MjMzYTBiMGU0ZDVkYzU4ODQ3YWM2YjpzZXNzaW9uX2lkPTJfTVg0ME5qRTNPRFV3TW41LU1UVTBNemsxTWpBNE1qUTBNbjVHYjJ4d1lTdDFMM052T1VOa1VIWjBVRGhZYW5FNWNtWi1mZyZjcmVhdGVfdGltZT0xNTQzOTUyMDk1Jm5vbmNlPTAuNTcyMjQ3OTIwNTk5OTQ3MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQ2NTQ0MDk0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
      }))
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionCode}/instructions`,
      state: { token: this.state.token, apiKey: this.state.apiKey, sessionId: this.state.sessionId }
    }
    if (this.state.requestFulfilled) {
      return <Redirect to={ location } />;
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
            <button className="button" onClick={() => this.startExperiment()}>
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
                width={100} />
            <input type="text"
                value={this.state.email}
                placeholder={"Email"}
                onChange={evt => this.updateEmailInputValue(evt.target.value)}
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

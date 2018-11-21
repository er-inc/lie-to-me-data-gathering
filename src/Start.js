import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      conditionsAccepted: false,
      sessionId: '',
      requestFulfilled: false,
      token: null,
      apiKey: null
    }
  }

  updateInputvalue(evt) {
    this.setState({
      sessionId: evt.target.value
    });
  }

  startExperiment() {
    this.setState({
      conditionsAccepted: true
    })
  }

  makeStartRequests() {
      //TODO: Replace with correct URL
    axios.get('https://api.github.com/users/danielaRiesgo')
      .then(response => this.setState({
          //username: response.data.name,
          requestFulfilled: true,
          apiKey: '46178502',
          token: 'T1==cGFydG5lcl9pZD00NjE3ODUwMiZzaWc9MDI4NmE5MzE4YzY1MWZiYTlkMDU5MjcwYWJjMjk1MWIzODBmMTE4MTpzZXNzaW9uX2lkPTJfTVg0ME5qRTNPRFV3TW41LU1UVXpPVEV6TmpVME5qa3pNSDVNZWtGWEwzRkhXakJOUmtKVFYwcHRSR2xPUVUxbWFuWi1mZyZjcmVhdGVfdGltZT0xNTM5MTM2NTYyJm5vbmNlPTAuMTYyODk4NDU5MTM2NzkwOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTM5NzQxMzY0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
      }))
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionId}/instructions`,
      state: { token: this.state.token, apiKey: this.state.apiKey }
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
            <p>Ingresá el código que te enviamos para esta sesión:</p>
            <input type="text" value={this.state.sessionId} placeholder={"Id de Sesión"} onChange={evt => this.updateInputvalue(evt)} />
            <button className="button" onClick={() => this.makeStartRequests()}>
            Ir
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Start;

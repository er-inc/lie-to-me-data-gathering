import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      conditionsAccepted: false,
      sessionId: ''
    }
  }

  updateInputvalue(evt) {
    this.setState({
      sessionId: evt.target.value
    });
  }

  startExperiment() {
      console.log("StartExperiment called")
    this.setState({
      conditionsAccepted: true
    })
  }

  apiKey() {
    return('46178502')
  }

  token() {
    return('T1==cGFydG5lcl9pZD00NjE3ODUwMiZzaWc9MDI4NmE5MzE4YzY1MWZiYTlkMDU5MjcwYWJjMjk1MWIzODBmMTE4MTpzZXNzaW9uX2lkPTJfTVg0ME5qRTNPRFV3TW41LU1UVXpPVEV6TmpVME5qa3pNSDVNZWtGWEwzRkhXakJOUmtKVFYwcHRSR2xPUVUxbWFuWi1mZyZjcmVhdGVfdGltZT0xNTM5MTM2NTYyJm5vbmNlPTAuMTYyODk4NDU5MTM2NzkwOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTM5NzQxMzY0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9')
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionId}`,
      state: { token: this.token(), apiKey: this.apiKey() }
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
            <Link to={ location }>
              <button className="button">
              Start
              </button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Start;

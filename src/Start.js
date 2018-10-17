import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component {
  state = {
    sessionId: ''
  }

  updateInputvalue(evt) {
    this.setState({
      sessionId: evt.target.value
    });
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
        <div>
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        This is a veeer veeery long text used to make the user accept the terms and conditions.
        </div>
        <div className="component-wrapper">
          <input type="text" value={this.state.sessionId} placeholder={"Session Id"} onChange={evt => this.updateInputvalue(evt)} />
          <Link to={ location }>
            <button className="button">
            Start!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Start;

import React from 'react';
import '../assets/styles/style.css';

class CrewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: true,
      sending: false,
    };
  }

  render() {
    return (
      <div className="container-fluid wrapper p0">
        <header>
          <div className="col-xs-12 mb1">
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => this.props.handleRoute('crew')}
            >
              Create New Timesheet{' '}
            </button>
          </div>
          <div className="clearfix" />
          <div className="bgGray">
            <div className="btn-group btn-group-justified p1">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${
                    this.state.draft ? 'btn-primary' : 'btn-default'
                  }`}
                  onClick={() => this.setState({ draft: true, sending: false })}
                >
                  Draft
                </button>
              </div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${
                    this.state.sending ? 'btn-primary' : 'btn-default'
                  }`}
                  onClick={() => this.setState({ sending: true, draft: false })}
                >
                  sending
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="timeSheetList scrollbar scrollbarStyle">
          {this.state.draft && (
            <ul className="list-group force-overflow">
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
            </ul>
          )}
          {this.state.sending && (
            <ul className="list-group force-overflow">
              <li className="list-group-item">
                <p className="txBlue">Event Number: 1111111111</p>
                <p>PO Number: 989898989</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
              <li className="list-group-item">
                <p className="txBlue">Event Number: 23455566656</p>
                <p>PO Number: 37895455</p>
                <div>
                  <p className="pull-left">Date: 11/12/2018</p>
                  <span
                    className="pull-right txBlue"
                    onClick={() => this.props.handleRoute('crew')}
                  >
                    &#x3e;&#x3e;&#x3e;
                  </span>
                </div>
                <div className="clearfix" />
              </li>
            </ul>
          )}
        </div>
        <footer>
          <div className="baryellow" />
          <div className="bargreen" />
          <div className="barorange" />
        </footer>
      </div>
    );
  }
}

export default CrewDetails;

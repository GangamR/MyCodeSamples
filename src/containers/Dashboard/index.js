import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/style.css';
import Footer from '../../components/Footer';
import { showEventDetail } from '../../actions/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: true,
      sending: false,
    };
  }

  render() {
    const { timeSheets } = this.props;
    return (
      <div className="container-fluid wrapper p0">
        <header>
          <div className="col-xs-12 mb1">
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => this.props.handleRoute('new')}
            >
              Create New Timesheet
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
              {timeSheets.map((timesheet, index) => {
                if (timesheet.status === 'draft') {
                  const sheet = timesheet.workDetail;
                  const eventSheet = timesheet.eventDetails;
                  return (
                    <li key={index} className="list-group-item">
                      {eventSheet.map((event, index) => {
                        if (event.eventID) {
                          return (
                            <p className="txBlue" key={index}>
                              Event Number: {event.eventId}
                            </p>
                          );
                        }
                      })}
                      <p>PO Number: {sheet.poNumber}</p>
                      <div>
                        <p className="pull-left">Date: {sheet.date}</p>
                        <span
                          className="pull-right txBlue"
                          onClick={() => {
                            this.props.showEventDetail(timesheet);
                            this.props.handleRoute('crew');
                          }}
                        >
                          &#x3e;&#x3e;&#x3e;
                        </span>
                      </div>
                      <div className="clearfix" />
                    </li>
                  );
                }
              })}
            </ul>
          )}
          {this.state.sending && (
            <ul className="list-group force-overflow">
              {timeSheets.map((timesheet, index) => {
                if (timesheet.status === 'sending') {
                  const sheet = timesheet.workDetail;
                  const eventSheet = timesheet.eventDetails;
                  return (
                    <li key={index} className="list-group-item">
                      {eventSheet.map((event, index) => {
                        if (event.eventID) {
                          return (
                            <p className="txBlue" key={index}>
                              Event Number: {event.eventId}
                            </p>
                          );
                        }
                      })}
                      <p>PO Number: {sheet.poNumber}</p>
                      <div>
                        <p className="pull-left">Date: {sheet.date}</p>
                        <span
                          className="pull-right txBlue"
                          onClick={() => {
                            this.props.showEventDetail(timesheet);
                            this.props.handleRoute('crew');
                          }}
                        >
                          &#x3e;&#x3e;&#x3e;
                        </span>
                      </div>
                      <div className="clearfix" />
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
        <Footer terms={false} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeSheets: state.timeSheetList.timeSheets,
  };
}

export default connect(mapStateToProps, { showEventDetail })(Dashboard);

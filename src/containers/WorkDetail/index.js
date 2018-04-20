import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import '../../assets/styles/style.css';
import Header from '../../components/Header';
import WorkDetailForm from '../../components/WorkDetailForm';
import { addWorkDetail } from '../../actions/index';

class WorkDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  updateWorkDetail() {
    this.props.submit('workDetailForm');
  }

  continueSubmit = () => {
    const { eventIndex, form, initialValues } = this.props;
    const workDetailFormValues = form.workDetailForm.values;
    const workDetail = {
      date: workDetailFormValues.date,
      poNumber: workDetailFormValues.poNumber,
      jtnNumber: workDetailFormValues.jtnNumber,
      vendorReferenceNumber: workDetailFormValues.vendorReferenceNumber,
      serviceCenter: workDetailFormValues.serviceCenter,
      workType: workDetailFormValues.workType,
      contractID: workDetailFormValues.contractID,
      id: initialValues.id,
    };
    this.props.addWorkDetail(workDetail, eventIndex);
    this.props.handleRoute('work');
  }
  render() {
    return (
      <div className="container-fluid wrapper workdetail p0 mt5">
        {<Header title="Work Details" />}
        <div className="bgWhite content col-xs-12 scrollbarStyle scrollbar">
          <WorkDetailForm
            onSubmit={this.props.submit}
            initialValues={this.props.initialValues}
            continueSubmit={this.continueSubmit}
          />
        </div>
        <footer>
          <ul className="tablinks" role="tablist">
            <span className="tabBar" />
            <li>
              <span className="tabLabel">Work Details</span>
              <span className="tabNumber active">1</span>
            </li>
            <li>
              <span className="tabLabel">Event Details</span>
              <span
                className="tabNumber"
                type="button"
                onClick={() => this.updateWorkDetail()}
              >
                2
              </span>
            </li>
            <li>
              <span className="tabLabel">Submit</span>
              <span className="tabNumber">3</span>
            </li>
          </ul>
          <div className="baryellow" />
          <div className="bargreen" />
          <div className="barorange" />
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.eventDetail.workDetail,
    form: state.form,
  };
}

export default connect(mapStateToProps, { addWorkDetail, submit })(WorkDetail);

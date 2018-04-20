import React from 'react';
import '../assets/styles/style.css';

class ModalDialog extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			this.props.isOpen &&
			<div className="modal fade in" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-sm" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								onClick={this.props.closePopup}
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title">{this.props.modalHeaderTitle}</h4>
						</div>
						<div className="modal-body">
							<p>
								{this.props.messageData}
							</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-default"
								onClick={this.props.closePopup}
							>
								Close
							</button>
							<button type="button" className="btn btn-primary" onClick={this.props.handleAction}>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ModalDialog;

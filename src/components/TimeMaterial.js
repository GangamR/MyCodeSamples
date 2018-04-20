import React from 'react';
import { connect } from 'react-redux';
import AddMaterial from './AddMaterial';
import AddEquipment from './AddEquipment';
import ModalDialog from './ModalDialog';
import { addMaterial } from '../actions/index';
import '../assets/styles/style.css';

class TimeMaterial extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			materialList: [],
			equipmentList: [],
			modalIsOpen: false,
			modalMsgData: '',
			checkItem: '',
			modalHeaderTitle: '',
			selectedOption: 'time'
		};
		this.addMaterial = this.addMaterial.bind(this);
		this.addEquipment = this.addEquipment.bind(this);
		this.closeHelpModal = this.closeHelpModal.bind(this);
		this.deleteMember = this.deleteMember.bind(this);
	}

	addMaterial() {
    this.props.addMaterial(this.props.form.materialForm.values);
		this.setState({ materialList: [...this.state.materialList, ` Material ${this.state.materialList.length+1}` ] });
	}

	addEquipment() {
    this.props.addEquipment(this.props.form.equipmentForm.values);
		this.setState({ equipmentList: [...this.state.equipmentList, `Equipment ${this.state.equipmentList.length+1}` ] });
	}

	deleteMember() {
		if (this.state.checkItem === 'Material') {
			this.setState({
				materialList: this.state.materialList.filter(e => e !== this.state.selectedItem),
				modalIsOpen: false,
			})
		} else {
			this.setState({
				equipmentList: this.state.equipmentList.filter(e => e !== this.state.selectedItem),
				modalIsOpen: false,
			})
		}
	}

	openHelpModal(item, event) {
		if (event === 'Material') {
			this.setState({
				modalIsOpen: true,
				modalMsgData: `Are you sure you want to delete this ${item}?`,
				modalHeaderTitle: `Delete ${item}`,
				checkItem: event,
				selectedItem: item
			});
		} else {
			this.setState({
				modalIsOpen: true,
				modalMsgData: `Are you sure you want to delete this ${item}?`,
				modalHeaderTitle: `Delete ${item}`,
				checkItem: event,
				selectedItem: item
			});
		}
	}

	closeHelpModal() {
		this.setState({
			modalIsOpen: false
		});
	}

	editMaterial(item) {
		this.setState({ isEditModeMaterial: item });
	}

	saveMaterial() {
		this.setState({ isEditModeMaterial: false });
	}

	editEquipment(item) {
		this.setState({ isEditModeEquipment: item });
	}

	saveEquipment() {
		this.setState({ isEditModeEquipment: false });
	}

	render() {
		return (
			<div>
					{this.state.materialList.map((item) => {
						return (
							<div key={item} className="listView">
								<div className="formHeader">
									<span className="pull-left">{item}</span>
									<span className="pull-right">
										{this.state.isEditModeMaterial === item ?
											<span
												onClick={() => this.saveMaterial()}
												className="glyphicon glyphicon-floppy-save mr5 cursor" />
											: <span
													onClick={() => this.editMaterial(item)}
													className="glyphicon glyphicon-pencil mr5 cursor" />
										}
										<span onClick={() => this.openHelpModal(item, 'Material')} className="glyphicon cursor glyphicon-trash"></span>
									</span>
									<div className="clearfix"></div>
								</div>
								{ this.state.isEditModeMaterial === item &&
								<div>
										<form>
										<div className="col-xs-6">
											<div className="form-group">
												<label htmlFor="ids">ID#</label>
												<input type="text"   className="form-control" />
											</div>
										</div>
										<div className="col-xs-6">
											<div className="form-group">
												<label htmlFor="ids">Quantity</label>
												<input type="text"  className="form-control" />
											</div>
										</div>
										<div className="col-xs-12">
						                <div className="form-group">
						            	<label htmlFor="ids">Masurements</label>
							           <select className="form-control">
								        <option value="">e.a</option>
							         	<option value="1">linar feet</option>
							       	<option value="2">sq.feet</option>
							          </select>
					             	</div>
				             	</div>
										<div className="clearfix"></div>
										<div className="col-xs-12">
											<div className="form-group">
												<label htmlFor="name">Name</label>
												<input type="text" placeholder="Name"  className="form-control" />
											</div>
										</div>
									</form>
									<div className="clearfix"></div>
								</div>
								}
							</div>
						);
					})}
					{ <AddMaterial initialValues={this.props.initialValues.materials[0]} addMaterial={() => this.addMaterial()}/>  }
					{this.state.equipmentList.map((item) => {
						return (
							<div key={item} className="listView">
								<div className="formHeader">
									<span className="pull-left">{item}</span>
									<span className="pull-right">
										{this.state.isEditModeEquipment === item ?
											<span
												onClick={() => this.saveEquipment()}
												className="glyphicon glyphicon-floppy-save mr5 cursor" />
											: <span
												onClick={() => this.editEquipment(item)}
												className="glyphicon glyphicon-pencil mr5 cursor" />
										}
										<span onClick={() => this.openHelpModal(item, 'Equipment')} className="glyphicon cursor glyphicon-trash"></span>
									</span>
									<div className="clearfix"></div>
								</div>

									{ this.state.isEditModeEquipment === item &&
									<div>
										<form>
											<div className="col-xs-6">
												<div className="form-group">
													<label htmlFor="ids">ID#</label>
													<input type="text"   className="form-control" />
												</div>
											</div>
											<div className="col-xs-6">
												<div className="form-group">
													<label htmlFor="ids">Quantity</label>
													<input type="text"   className="form-control" />
												</div>
											</div>
											<div className="clearfix"></div>
											<div className="col-xs-12">
												<div className="form-group">
													<label htmlFor="name">Name</label>
													<input type="text" placeHolder="Name"  className="form-control" />
												</div>
											</div>
										</form>
										<div className="clearfix"></div>
									</div>
									}
							</div>
						);
					})}
					{ <AddEquipment initialValues={this.props.initialValues.equipments[0]} addEquipment={() => this.addEquipment()}/>}
					<div className="clearfix"></div>
					<div className="spacer2"></div>
				{ <ModalDialog
					isOpen={this.state.modalIsOpen}
					messageData={this.state.modalMsgData}
					modalHeaderTitle={this.state.modalHeaderTitle}
					closePopup={this.closeHelpModal}
					handleAction={this.deleteMember}
				/> }
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

export default connect(mapStateToProps, { addMaterial } )(TimeMaterial);

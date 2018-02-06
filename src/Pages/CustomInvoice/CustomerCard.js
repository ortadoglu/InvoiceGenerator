import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccount from 'material-ui/svg-icons/action/fingerprint';

class CustomerCard extends Component {
	render() {


		return (
			<div className="CustomerCard">
				<List >
					<ListItem
						leftIcon={<ActionAccount />}
						primaryText={this.props.customer.Name}
						secondaryText={this.props.customer.Company}
					/>
					<ListItem
						leftIcon={<ActionHome />}
						primaryText={this.props.customer.Address}
						secondaryText={this.props.customer.Country}
					/>
					<ListItem
						leftIcon={<CommunicationEmail />}
						primaryText={this.props.customer.Email}
					/>
				</List>
			</div>
		);
	}
}

export default CustomerCard;

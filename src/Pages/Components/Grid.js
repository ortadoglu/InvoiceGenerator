import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Grid extends Component {
	render() {
		return (
			<ReactTable
				data={this.props.data}
				columns={this.props.columns}
				filterable
				defaultFilterMethod={(filter, row) =>
					String(row[filter.id]).startsWith(filter.value)}
				defaultPageSize={15}
				getTdProps={(state, rowInfo, column, instance) => {
					return {
						onClick: (e, handleOriginal) => {
							console.log('A Td Element was clicked!')
							console.log('it produced this event:', e)
							console.log('It was in this column:', column)
							console.log('It was in this row:', rowInfo)
							console.log('It was in this table instance:', instance)

							if (handleOriginal) {
								handleOriginal()
							}
						}
					}
				}}
			/>
		);
	}
}

export default Grid;

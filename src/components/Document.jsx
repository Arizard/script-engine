import React, { Component } from 'react';
import ScriptRowForm from './ScriptRowForm';
import ScriptRowHeader from './ScriptRowHeader';
import ScriptRowTitle from './ScriptRowTitle';
import uuid from 'uuid';
import './Document.css';

export default class Document extends Component {
	constructor(props) {
		super(props);

		this.numChanges = 0;

		this.state = {
			data: this.props.data,
			nextFocusUUID: null,
		};

		console.log(this.props.data)
	}

	insertHeaderAfter(_uuid) {
		return () => {
			this.setState(state => {
				var index;
				const newRow = {
					type: 'h1',
					text: 'New Header',
					uuid: uuid.v4()
				};
				state.data.data.forEach((row, i) => {
					if (row.uuid === _uuid) {
						index = i;
					}
				});
				if (index === state.data.data.length - 1) {
					state.data.data.push(newRow);
				} else {
					state.data.data.splice(index + 1, 0, newRow);
				}

				return state;
			});
		};
	}
	insertScriptRowAfter(_uuid) {
		return () => {
			this.setState(state => {
				var index;
				const newRow = {
					type: 'script-row-form',
					cts: '',
					moveName: '',
					moveOutcome: '',
					relevantCues: '',
					uuid: uuid.v4()
				};
				state.data.data.forEach((row, i) => {
					if (row.uuid === _uuid) {
						index = i;
					}
				});
				if (index === state.data.data.length - 1) {
					state.data.data.push(newRow);
				} else {
					state.data.data.splice(index + 1, 0, newRow);
				}

				state.nextFocusUUID = newRow.uuid

				return state;
			});
		};
	}
	duplicateScriptRow(_uuid) {
		return () => {
			this.setState(state => {

				var index;
				var newRow;

				for (var i = 0; i < state.data.data.length; i++) {
					var row = state.data.data[i]
					if (row.uuid === _uuid) {
						index = i;
						newRow = Object.assign({}, row)
					}
				}

				newRow.uuid = uuid.v4()
				
				if (index === state.data.data.length - 1) {
					state.data.data.push(newRow);
				} else {
					state.data.data.splice(index + 1, 0, newRow);
				}

				state.nextFocusUUID = newRow.uuid

				return state;
			});
		};
	}
	deleteRow(_uuid) {
		return () => {
			this.setState(state => {
				var filtered = state.data.data.filter(value => {
					return value.uuid !== _uuid;
				});
				var newState = state;
				newState.data.data = filtered;
				return newState;
			});
		};
	}
	confirmChange(_uuid) {
		return newData => {
			var curState = this.state
			for (var i = 0; i < curState.data.data.length; i++) {
				var row = curState.data.data[i]
				if (row.uuid === _uuid) {
					curState.data.data[i] = newData;
				}
			}
			curState.nextFocusUUID = null
			this.setState(state => {
				return curState;
			});
			if (this.props.onDocumentUpdate) {
				this.props.onDocumentUpdate(curState.data);
			}
		};
	}
	moveBy(_uuid, n) {
		return () => {
			var s;
			this.state.data.data.forEach((row, i) => {
				if (row.uuid === _uuid) {
					s = i;
				}
			});
			var d = s + n;
			if (d < 0) {
				d = 0;
			}
			if (d >= this.state.data.data.length) {
				d = this.state.data.data.length - 1;
			}
			console.log(d + ' ' + s);
			if (d === s) {
				return;
			}
			var dir = 1;
			if (n < 0) {
				dir = -1;
			}
			this.setState(state => {
				while (s !== d) {
					var e1 = state.data.data[s];
					var e2 = state.data.data[s + dir];
					state.data.data[s] = e2;
					state.data.data[s + dir] = e1;
					s = s + dir;
				}
				if (this.props.onDocumentUpdate) {
					this.props.onDocumentUpdate(state.data);
				}
				return state;
			});
		};
	}

	render() {
		const docRows = this.state.data.data.map(row => {
			switch (row.type) {
				case 'h1':
					return (
						<div className="hover-outline">
							<ScriptRowHeader
								key={row.uuid}
								uuid={row.uuid}
								onConfirmChange={this.confirmChange(row.uuid)}
								onInsertHeaderAfter={this.insertHeaderAfter(
									row.uuid
								)}
								onInsertScriptRowAfter={this.insertScriptRowAfter(
									row.uuid
								)}
								onMoveDown={this.moveBy(row.uuid, 1)}
								onMoveUp={this.moveBy(row.uuid, -1)}
                                onDeleteRow={this.deleteRow(row.uuid)}
                                placeholder="Click to edit Heading"
								text={row.text}
								nextFocusUUID={this.state.nextFocusUUID}
								onDuplicateScriptRow={this.duplicateScriptRow(row.uuid)}
							/>
						</div>
					);
				case 'script-row-form':
					return (
						<div className="hover-outline">
							<ScriptRowForm
								key={row.uuid}
								uuid={row.uuid}
								onConfirmChange={this.confirmChange(row.uuid)}
								onInsertHeaderAfter={this.insertHeaderAfter(
									row.uuid
								)}
								onInsertScriptRowAfter={this.insertScriptRowAfter(
									row.uuid
								)}
								onDuplicateScriptRow={this.duplicateScriptRow(row.uuid)}
								onMoveDown={this.moveBy(row.uuid, 1)}
								onMoveUp={this.moveBy(row.uuid, -1)}
								onDeleteRow={this.deleteRow(row.uuid)}
								cts={row.cts}
								moveName={row.moveName}
								moveOutcome={row.moveOutcome}
								relevantCues={row.relevantCues}
								nextFocusUUID={this.state.nextFocusUUID}
							/>
						</div>
					);
				case 'title':
					return (
						<div className="hover-outline">
							<ScriptRowTitle
								key={row.uuid}
								uuid={row.uuid}
								text={row.text}
								placeholder="Click to edit Title"
								onConfirmChange={this.confirmChange(row.uuid)}
							/>
						</div>
					);
				default:
					return <p>Error rendering component.</p>;
			}
		});
		return (
			<div>
				{docRows}
			</div>
		);
	}
}

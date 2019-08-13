import Base from './Base';
import uuid from 'uuid'
import ScriptEngine from '../config/ScriptEngine'

class DocumentRepository extends Base {
	constructor(token) {
		super();
		this.token = token;
    }
    
    create(callback) {
        var obj = { 
			method: 'POST',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Host': 'localhost:8080',
				'Origin': 'http://localhost:3000',
				'Authorization': `Bearer ${this.token}`,
				'Cache-Control': 'no-cache',
			},
			body: '',
		}
		fetch(ScriptEngine.createCreateDocumentURL(), obj)
			.then(res => res.json())
			.then(res => {
				callback(res.uuid)
			})
			.catch((err) => { console.log(`Could not get document: ${err}`) })
	}
	
	get(_uuid, callback) {
		var obj = { 
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Host': 'localhost:8080',
				'Origin': 'http://localhost:3000',
				'Authorization': `Bearer ${this.token}`,
				'Cache-Control': 'no-cache',
			},
		}
		fetch(ScriptEngine.createGetDocumentURL(_uuid), obj)
			.then(res => res.json())
			.then(res => {
				var newRes = res
				var objectData = JSON.parse(res.data)
				for (var i = 0; i < objectData.length; i++) {
					// We tack the uuid on to each. It doesn't need to be persisted,
					// but we do need to have some kind of identity for each row.
					objectData[i].uuid = uuid.v4()
				}
				newRes.data = objectData
				callback(newRes)
			})
			.catch((err) => { console.log(`Could not get document: ${err}`) })
	}
    
    update(_uuid, data, callback) {
		console.log(`Updating document '${_uuid}'`)
		var newData = JSON.parse(JSON.stringify(data))
		for (var i = 0; i < data.data.length; i++){
			var row = newData.data[i]
			delete row.uuid
			newData.data[i] = row
		}
		var obj = { 
			method: 'PUT',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Host': 'localhost:8080',
				'Origin': 'http://localhost:3000',
				'Authorization': `Bearer ${this.token}`,
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify(newData),
		}
		fetch(ScriptEngine.createUpdateDocumentURL(_uuid), obj)
			.then(res => res.status)
			.then(resStatus => {
				callback(resStatus)
			})
			.catch((err) => { 
				console.log(`Could not get document: ${err}`)
				callback(0)
			})
    }

    delete(_uuid) {
        console.log(`Deleting document '${_uuid}'`)
    }
}

export { DocumentRepository };

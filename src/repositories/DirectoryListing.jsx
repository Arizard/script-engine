import Base from './Base';
import ScriptEngine from '../config/ScriptEngine'

class DirectoryListingRepository extends Base {
	constructor(token) {
		super();
		this.token = token
	}

	get(callback) {
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
		fetch(ScriptEngine.ListDocuments, obj)
			.then(res => res.json())
			.then(res => {
				var data = res
				data.forEach((value, index) => {
					value.id = index
				});
				callback(data)
			})
			.catch((err) => { console.log(`Could not get list of documents: ${err}`) })
	}
}

export { DirectoryListingRepository };

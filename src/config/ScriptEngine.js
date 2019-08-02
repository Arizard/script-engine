import fire from './Fire'


class ScriptEngineAPI {
    constructor(url){
        this.apiURL = url
        this.ListDocuments = `${this.apiURL}/documents`
        this.DocumentEndpoint = `${this.apiURL}/document`
    }

    createGetDocumentURL = (_uuid) => {
        return `${this.DocumentEndpoint}/${_uuid}`
    }

    createUpdateDocumentURL = (_uuid) => {
        return `${this.DocumentEndpoint}/${_uuid}`
    }

    createCreateDocumentURL = () => {
        return `${this.DocumentEndpoint}/`
    }
}

const ScriptEngine = new ScriptEngineAPI('https://scriptengine-f031b.appspot.com')

export default ScriptEngine
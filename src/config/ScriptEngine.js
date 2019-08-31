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

const ScriptEngineAPIEnvironments = {
    'dev': 'http://localhost:8080',
    'test': 'https://scriptengine-f031b.appspot.com',
    'prod': 'https://scriptengine-f031b.appspot.com'
}

if (process.env.REACT_APP_ENVIRONMENT === undefined) {
    throw new Error("Environment not defined, please set REACT_APP_ENVIRONMENT environment variable and rebuild.")
}

const ScriptEngine = new ScriptEngineAPI(ScriptEngineAPIEnvironments[process.env.REACT_APP_ENVIRONMENT])

export default ScriptEngine
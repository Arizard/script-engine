
import Base from './Base'


class FakeDocumentRepository extends Base {
    constructor(token) {
        super()
        this.token = token
    } 

    get() {
        return [
            {
                type: 'title',
                text: 'PROGRAMNAME™ 123',
                uuid: 'fakefake_uuid',
            },
            {
                type: 'h1',
                text: 'Track 1',
                uuid: 'fake-uuid',
            },
            {
                type: 'script-row-form',
                cts: '',
                moveName: '',
                moveOutcome: '',
                relevantCues: '',
                uuid: 'fake-uuid-2',
            },
            {
                type: 'script-row-form',
                cts: '',
                moveName: '',
                moveOutcome: '',
                relevantCues: '',
                uuid: 'fake-uuid-3',
            },
            {
                type: 'script-row-form',
                cts: '',
                moveName: '',
                moveOutcome: '',
                relevantCues: '',
                uuid: 'fake-uuid-4',
            },
        ]
    }
}

export { FakeDocumentRepository }

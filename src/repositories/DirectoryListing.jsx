
import Base from './Base'
import uuid from 'uuid'


class DirectoryListingRepository extends Base {

}

class FakeDirectoryListingRepository extends Base {
    constructor(token) {
        super()
        this.token = token
    } 

    get() {
        return [
            {
                id: 1,
                label: "BODYBALANCE™ 77",
                description: 'Scripts for BODYBALANCE 77',
                uuid: uuid.v4(),
            },
            {
                id: 2,
                label: "BODYBALANCE™ 78",
                description: 'Scripts for BODYBALANCE 78',
                uuid: uuid.v4(),
            },
            {
                id: 3,
                label: "BODYSTEP™ 116",
                description: 'Scripts for BODYSTEP 116',
                uuid: uuid.v4(),
            }
        ]
    }
}

export { DirectoryListingRepository, FakeDirectoryListingRepository }

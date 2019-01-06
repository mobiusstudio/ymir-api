import chai from 'chai'
import charAsPromised from 'chai-as-promised'
import chaiError from './error'
import chaiDefinition from './definition'
import chaiResponse from './response'
import chaiType from './type'

chai.use(chaiError)
chai.use(chaiDefinition)
chai.use(chaiResponse)
chai.use(chaiType)
chai.use(charAsPromised)

export default chai

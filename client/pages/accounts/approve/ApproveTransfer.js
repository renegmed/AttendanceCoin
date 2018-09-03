import React, {Component} from 'react'

import Layout from '../../../components/containers/Layout'
import ApproveTransferForm from './ApproveTransferForm'

class ApproveTransfer extends Component {
    render() {
        return (
            <Layout>
                <label>Allocate Token To Account</label>
                <p/>
                <ApproveTransferForm />
            </Layout>
        )
    }
}

export default ApproveTransfer

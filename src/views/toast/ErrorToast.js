import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { X } from 'react-feather'

const ErrorToast = (props) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="danger" icon={<X size={12} />} />
        <h6 className="text-danger toast-title">Error!</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span role="img" aria-label="toast-text">
        {props.msg}
        <br />
      </span>
    </div>
  </Fragment>
)

export default ErrorToast

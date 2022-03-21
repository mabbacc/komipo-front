import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { X } from 'react-feather'

const InfoToast = (props) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<X size={12} />} />
        <h6 className="text-primary toast-title">Information!</h6>
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

export default InfoToast

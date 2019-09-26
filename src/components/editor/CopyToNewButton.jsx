// Copyright 2019 Stanford University see LICENSE for license

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { copyResourceToEditor } from 'actionCreators/resources'
import { getCurrentUser } from 'authSelectors'
import { rootResourceId } from 'selectors/resourceSelectors'

const CopyToNewButton = (props) => {
  const dispatch = useDispatch()
  const resourceId = useSelector(state => rootResourceId(state))
  const currentUser = useSelector(state => getCurrentUser(state))

  const handleClick = () => {
    /* eslint no-restricted-globals: 'off' */
    const continueCopy = confirm('Do you want to copy to a new resource?')
    if (continueCopy) {
      dispatch(copyResourceToEditor(currentUser, resourceId))
    }
  }

  return (
    <button type="button"
            className="btn btn-link btn-sm"
            id={props.id}
            onClick={() => handleClick()}>Copy</button>
  )
}

CopyToNewButton.propTypes = {
  copyResourceToEditor: PropTypes.func,
  id: PropTypes.string,
}

export default CopyToNewButton

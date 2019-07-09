// Copyright 2019 Stanford University see LICENSE for license

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

export class PropertyTypeRow extends Component {
  render() {
    return (
      <React.Fragment key={shortid.generate()}>
        { this.props.children }
      </React.Fragment>
    )
  }
}

PropertyTypeRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleAddClick: PropTypes.func,
  propertyTemplate: PropTypes.object,
}

export default PropertyTypeRow

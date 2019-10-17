// Copyright 2019 Stanford University see LICENSE for license

import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'

const DropZone = (props) => {
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgb(102, 102, 102)',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    margin: 'auto',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    width: '200px',
    height: '200px',
  }

  const activeStyle = {
    borderColor: '#2196f3',
  }

  const onDrop = useCallback((acceptedFiles) => {
    props.setGroupCallback(props.defaultSinopiaGroupId)
    props.dropFileCallback(acceptedFiles)
  }, [props])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop, multiple: false })

  const style = useMemo(() => ({
    ...baseStyle,
    ...isDragActive ? activeStyle : {},
  }), [activeStyle, baseStyle, isDragActive])

  const listStyle = {
    listStyleType: 'none',
  }
  const fileName = {
    fontSize: '18px',
  }

  return (
    <section>
      <p style={{
        marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5em', textIndent: '-1.5em', width: '300px',
      }}>
        Drag and drop a resource template file in the box
          or click it to select a file to upload:
      </p>

      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
      </div>
      <aside>
        <h5>Loaded resource template file:</h5>
        <ul style={listStyle}>
          { props.filesCallback.map(f => <li style={fileName} key={f.name}>{f.name} - {f.size} bytes</li>) }
        </ul>
      </aside>
    </section>
  )
}


DropZone.propTypes = {
  dropFileCallback: PropTypes.func,
  showDropZoneCallback: PropTypes.func,
  filesCallback: PropTypes.array,
  setGroupCallback: PropTypes.func,
  defaultSinopiaGroupId: PropTypes.string,
}

export default DropZone
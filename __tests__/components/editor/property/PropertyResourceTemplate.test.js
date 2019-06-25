// Copyright 2019 Stanford University see LICENSE for license

import React from 'react'
import 'jsdom-global/register'
import { mount, shallow } from 'enzyme'
import PropertyActionButtons from 'components/editor/property/PropertyActionButtons'
import PropertyResourceTemplate from 'components/editor/property/PropertyResourceTemplate'
import PropertyTemplateOutline from 'components/editor/property/PropertyTemplateOutline'
import shortid from 'shortid'

describe('<PropertyResourceTemplate />', () => {
  shortid.generate = jest.fn().mockReturnValue('AE6Be-DJGj')

  const propertyRtProps = {
    resourceTemplate: {
      id: 'resourceTemplate:bf2:WorkTitle',
      resourceLabel: 'Test Schema Thing Template',
      propertyTemplates: [
        {
          propertyLabel: 'Description',
          propertyURI: 'http://schema.org/description',
        },
      ],
    },
    reduxPath: ['http://id.loc.gov/ontologies/bibframe/title'],
  }

  const wrapper = shallow(<PropertyResourceTemplate {...propertyRtProps} />)
  const propTemplateOutline = wrapper.find(PropertyTemplateOutline)

  // Make sure spies/mocks don't leak between tests
  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Contains label of from the props', () => {
    expect(wrapper.find('h4').text()).toBe(`${propertyRtProps.resourceTemplate.resourceLabel}`)
  })

  it('Contains a <PropertyTemplateOutline />', () => {
    expect(wrapper.find(PropertyTemplateOutline)).toBeTruthy()
  })

  it('<PropertyTemplateOutline /> contains a propertyTemplate', () => {
    expect(propTemplateOutline.props().propertyTemplate).toBeTruthy()
  })

  it('<PropertyTemplateOutline /> has the expected Redux path', () => {
    expect(propTemplateOutline.props().reduxPath).toEqual([
      'http://id.loc.gov/ontologies/bibframe/title',
      'AE6Be-DJGj',
      'resourceTemplate:bf2:WorkTitle',
    ])
  })

  describe('<PropertyResourceTemplate /> has the "Add" button', () => {
    const wrapper = shallow(<PropertyResourceTemplate {...propertyRtProps} />)
    const actionButtons = wrapper.find(PropertyActionButtons)

    it('Contains a PropertyActionButtons component', () => {
      expect(actionButtons).toBeTruthy()
    })

    it('handles "Add" button click', () => {
      const addEvent = { preventDefault: jest.fn() }

      actionButtons.props().handleAddClick(addEvent)
      expect(addEvent.preventDefault.mock.calls.length).toBe(1)
    })
  })

  describe('<PropertyActionButtons /> addButtonDisabled prop value', () => {
    it('isRepeatable false:  addButtonDisabled prop is true', () => {
      const wrapper = mount(<PropertyResourceTemplate isRepeatable={'false'} {...propertyRtProps} />)
      const actionButtons = wrapper.find(PropertyActionButtons)

      expect(actionButtons.props().addButtonDisabled).toBeTruthy()
    })
    it('isRepeatable true:  addButtonDisabled prop is false', () => {
      const wrapper = mount(<PropertyResourceTemplate isRepeatable={'true'} {...propertyRtProps} />)
      const actionButtons = wrapper.find(PropertyActionButtons)

      expect(actionButtons.props().addButtonDisabled).toBeFalsy()
    })
  })
})

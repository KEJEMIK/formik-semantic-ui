import React from 'react';
import {render, cleanup} from 'react-testing-library';

import {Checkbox, Dropdown, Form, Input, TextArea} from '../lib/index';

describe('formik-semantic-ui', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Input', () => {
    it('default ', () => {
      const {container} = render(
        <Form initialValues={{name: ''}}>
          <Input label="Name" name="name" />
        </Form>
      );
      expect(container).toMatchSnapshot();
    });

    it('with initial value ', () => {
      const {container} = render(
        <Form initialValues={{name: 'Justin'}}>
          <Input label="Name" name="name" />
        </Form>
      );
      expect(container).toMatchSnapshot();
    });

    it('without label and with custom "id" ', () => {
      const {container} = render(
        <Form initialValues={{name: ''}}>
          <Input name="name" id="my-custom-id" />
        </Form>
      );
      expect(container).toMatchSnapshot();
    });

    it('with custom "id" ', () => {
      const {container} = render(
        <Form initialValues={{name: ''}}>
          <Input label="Name" name="name" id="my-custom-id" />
        </Form>
      );
      expect(container).toMatchSnapshot();
    });

    it('with input props and field props ', () => {
      const {container} = render(
        <Form initialValues={{name: ''}}>
          <Input
            label="Name"
            name="name"
            inputProps={{type: 'password'}}
            fieldProps={{width: '8'}}
          />
        </Form>
      );
      expect(container).toMatchSnapshot();
    });
  });

  it('Checkbox: default ', () => {
    const {container} = render(
      <Form initialValues={{checked: true}}>
        <Checkbox label="Checked" name="checked" />
      </Form>
    );
    expect(container).toMatchSnapshot();
  });

  it('TextArea: default ', () => {
    const {container} = render(
      <Form initialValues={{name: ''}}>
        <TextArea label="Name" name="name" />
      </Form>
    );
    expect(container).toMatchSnapshot();
  });

  it('Dropdown: default ', () => {
    const {container} = render(
      <Form initialValues={{name: ''}}>
        <Dropdown
          label="Name"
          name="name"
          options={[
            {text: 'Justin', value: 'justin'},
            {text: 'Not Justin', value: 'not-justin'},
          ]}
        />
      </Form>
    );
    expect(container).toMatchSnapshot();
  });
});

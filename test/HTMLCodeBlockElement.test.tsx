import * as React from 'react';
import '../types/global';
import renderer from 'react-test-renderer';

describe('React', () => {
  test('Simple', () => {
    const component = renderer.create(
        <code-block/>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('JSON', () => {
    const component = renderer.create(
        <code-block language="json">{
          `{
            "hoge": 100
          }`}
        </code-block>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('All', () => {
    const component = renderer.create(
        <code-block
          label="hoge"
          language="js"
          controls
        >
          <textarea><script>
            const hoge = 100;

            console.log(100);
          </script></textarea>
        </code-block>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

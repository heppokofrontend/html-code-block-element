import HTMLCodeBlockElement from '../src/class/HTMLCodeBlockElement';

describe('Error', () => {
  test('No Endgine', () => {
    expect(() => HTMLCodeBlockElement.highlight({src: 'sample'})).toThrowError(
      'The syntax highlighting engine is not set to `HTMLCodeBlockElement.highlight`.'
    );
  });
});

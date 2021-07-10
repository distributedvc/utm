import { utm } from '../src';

describe('UTM', (): void => {
  it('should extract correct utms from the query', async (): Promise<void> => {
    const utms = utm(
      '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term'
    );

    expect(utms).toMatchSnapshot();
  });

  it('should ignore non utms params', async (): Promise<void> => {
    const utms = utm(
      '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term&foo=bar&baz=foo'
    );

    expect(utms).toMatchSnapshot();
  });
});

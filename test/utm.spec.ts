import { utm } from '../src';

global.window = Object.create(window);

describe('UTM', (): void => {
  it('should extract correct utms from the query', async (): Promise<void> => {
    const utms = utm(
      '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term'
    );

    expect(utms).toMatchSnapshot();
  });

  it('should return an empty object if nothing is passed', async (): Promise<void> => {
    const utms = utm();

    expect(utms).toMatchSnapshot();
  });

  it('should extract correct utms from window.location.search', async (): Promise<void> => {
    Object.defineProperty(window, 'location', {
      value: {
        search:
          '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term',
      },
    });

    const utms = utm();

    expect(utms).toMatchSnapshot();
  });

  it('should ignore non utms params', async (): Promise<void> => {
    const utms = utm(
      '?utm_source=google&utm_campaign=name&utm_medium=medium&utm_content=content&utm_term=term&foo=bar&baz=foo'
    );

    expect(utms).toMatchSnapshot();
  });
});

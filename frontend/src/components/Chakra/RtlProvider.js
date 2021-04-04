import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

const RtlProvider = ({ children }) => {
  const farsi = { key: 'css-fa', stylisPlugins: [rtl] };
  const cache = createCache(farsi);
  return <CacheProvider value={cache} children={children} />;
};

export default RtlProvider;

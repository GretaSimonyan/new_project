import * as path from 'path';

import * as webpack from 'webpack';
import {
  DefinePlugin, RuleSetRule,
} from 'webpack';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = {
    ...config.resolve!.alias,
    '@': path.resolve(__dirname, '../../src/'),
  };

  const rules = config.module!.rules as RuleSetRule[];

  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://testapi.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }));
  return config;
};

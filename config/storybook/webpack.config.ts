import { BuildPaths } from '../build/types/config';
import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';

module.exports = ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
